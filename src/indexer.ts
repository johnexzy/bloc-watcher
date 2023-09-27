import { utils } from "ethers";
import Contracts from "./contracts";
import Provider from "./connection/provider";
import { Alchemy, Network, AlchemySubscription } from "alchemy-sdk";
import NetworkUtils from "./utils/networkUtils";
import sendWebHook from "./webhookParser";
import { trxResponse } from "./types/types";

export default class MainIndexer {
  public watchList: string[] = [];
  public webhookUrl: string;
  private network: string[];

  constructor(config: {
    network: string[];
    watchList: string[];
    webHookUrl: string;
  }) {
    this.watchList = config.watchList;
    this.webhookUrl = config.webHookUrl;
    this.network = config.network;
  }

  public init(): void {
    this.network.forEach((n) => this.runIndexer(n));
  }

  protected async runIndexer(network: string): Promise<void> {
    const contracts = new Contracts(network);
    const provider = new Provider(network).provider;
    const tokenContract = await contracts.tokenContract();

    const settings = {
      apiKey: NetworkUtils.getRpcApiKey(network), // Replace with your Alchemy API Key
      network: `eth-${network}` as Network, // Replace with your network
    };

    const alchemy = new Alchemy(settings);
    try {
      console.log("Started Watcher on " + network);

      // Token Bloc Receiver
      await tokenContract.on("Transfer", async (from, to, value, trx) => {
        if (
          this.watchList.find((a) => a === from) ||
          this.watchList.find((a) => a === to)
        ) {
          const data: trxResponse = {
            from,
            to,
            value: Number(utils.formatUnits(value, 6)),
            transactionHash: trx.transactionHash,
            transactionType: "Token",
            text: "Token Transaction",
            network: network,
            chainId: NetworkUtils.getChainId(network),
            contractAddress: trx.address,
          };

          sendWebHook(data, this.webhookUrl);
        }
      });

      // Native Transfer Bloc Receiver
      alchemy.ws.on(
        {
          method: AlchemySubscription.PENDING_TRANSACTIONS,
          fromAddress: this.watchList, // Replace with address to recieve pending transactions from this address
          toAddress: this.watchList, // Replace with address to send  pending transactions to this address
        },
        (tx) => {
          provider.once(tx.hash, async (confirmedTx) => {
            console.log(confirmedTx)
            const { from, to, value, hash } = await provider.getTransaction(
              confirmedTx.transactionHash
            );

            const data: trxResponse = {
              from,
              to: to!,
              value: Number(utils.formatUnits(value)),
              transactionHash: hash,
              transactionType: "Native Transfer",
              network: network,
              chainId: NetworkUtils.getChainId(network),
              contractAddress: null,
              text: "Native Transfer"
            };
            sendWebHook(data, this.webhookUrl);
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
