import { providers } from "ethers";
import NetworkUtils from "../utils/networkUtils";
export default class Provider {
  public provider: providers.AlchemyWebSocketProvider;
  public network: string;
  constructor(network: string) {
    this.network = network;
    this.provider = new providers.AlchemyWebSocketProvider(
      NetworkUtils.getChainId(network),
      NetworkUtils.getRpcApiKey(network)
    );
  }

  public getUSDCAddress(): string {
    return NetworkUtils.getUSDCAddress(this.network);
  }

  public getProvider(): providers.AlchemyWebSocketProvider {
    return this.provider;
  }

  // set provider to preffered
  public setProvider(network: string) {
    this.provider = new providers.AlchemyWebSocketProvider(
      NetworkUtils.getChainId(network),
      NetworkUtils.getRpcApiKey(network)
    );
  }

  public getRpcUrl(network: string) {
    return NetworkUtils.getRpcUrl(network);
  }

  public getChainId(network: string) {
    return NetworkUtils.getChainId(network);
  }
}
