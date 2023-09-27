import { Contract } from 'ethers'
import Provider from './connection/provider'
// import CreateWallet from './connection/wallet'
import usdcAbi from './abi/erc20.json'

export default class Contracts extends Provider {
  // private wallet: Wallet
  constructor(network: string) {
    super(network)
    // this.wallet = CreateWallet.initializeNewWallet()
  }
  public tokenContract(contractAddress: string): Contract{
    const contract = new Contract(contractAddress, usdcAbi, this.provider)
    return contract
  }
}
