import networks from '../networks/network'
import {
  usdcAddresses,
} from '../networks/proxyAddress'
import { NetworkUtilsType } from '../types/types'
export default class NetworkUtils extends NetworkUtilsType {
  public static getRpcUrl(network: string): string {
    const n = networks.find((r) => network === r.network)!
    return n.rpc[Math.floor(Math.random() * n.rpc.length)]
  }
  public static getRpcApiKey(network: string): string {
    const n = networks.find((r) => network === r.network)!
    return n.rpc[Math.floor(Math.random() * n.rpc.length)]
  }
  public static getNetwork(network: string) {
    const n = networks.find((r) => network === r.network)
    return n
  }

  public static getUSDCAddress(network: string): string {
    const n = usdcAddresses.find((r) => network === r.network)!
    return n.address
  }

  public static getChainId(network: string): number {
    const n = networks.find((r) => network === r.network)!
    return n.chainId
  }
}
