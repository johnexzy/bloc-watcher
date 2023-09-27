import { BigNumber, Wallet } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";

export type NetworkType = {
  network: string;
  name: string;
  label: string;
  value: string;
  chainId: number;
  currency: string;
  rpc: string[];
  explorer: string;
  api: string;
};
type blockTx = {
  blockNumber: number;
  timeStamp: number;
  hash: string;
  nonce: number;
  blockHash: string;
  from: string;
  contractAddress: string;
  to: string;
  value: number;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: number;
  transactionIndex: number;
  gas: number;
  gasPrice: number;
  gasUsed: number;
  cumulativeGasUsed: number;
  input: string;
  confirmations: number;
};
export type TokenTx = {
  status: "1" | "0";
  message: "OK" | "NOTOK";
  result: blockTx[] | [] | string;
};
export interface IEtherUtils {
  wallet: Wallet;
  send: (to: string, amount: string) => Promise<boolean | TransactionResponse>;
  balance: () => Promise<string>;
  estimateGasPriceTransfer: () => Promise<BigNumber>;
}
export abstract class ICrypto {
  static encode: (pkey: string) => string;
  static decode: (pkey: string) => string;
}
export abstract class NetworkUtilsType {
  static getRpcUrl: (network: string) => string;
  static getNetwork: (network: string) => NetworkType | undefined;
}

export type networkName = "mainnet" | "goerli";
export type trxResponse = {
  from: string;
  to: string;
  value: number;
  transactionHash: string;
  transactionType: string;
  network: string;
  chainId: number;
  text?: string;
  contractAddress: null | string;
};
