import { Wallet } from "ethers";
export default class CreateWallet {
  initializeNewWallet(): Wallet {
    return Wallet.createRandom();
  }
  importFromPrivateKey(privateKey: string): Wallet {
    return new Wallet(privateKey);
  }
  importFromPhrase(phrase: string) : Wallet {
    return Wallet.fromMnemonic(phrase);
  }
  getAddressFromKey(privateKey: string): string {
    return (new Wallet(privateKey)).address;
  }
  masterWallet(): Wallet {
    return (new Wallet(process.env.PRIVATE_KEY as string))
  }
}
