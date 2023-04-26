import { Wallet } from 'ethers'

export default class CreateWallet {
  public static initializeNewWallet(): Wallet {
    return new Wallet(process.env.MASTER_WALLET_PRIVATE_KEY!)
  }
}
