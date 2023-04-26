import { NetworkType } from "../types/types";

export default [
  {
    network: "mainnet",
    name: "Ethereum",
    chainId: 1,
    currency: "ETH",
    rpc: [
      "https://eth-mainnet.alchemyapi.io/v2/7lR5N50UXB4y8URS4S9J3JPuxHWkW8uH",
      "https://eth-mainnet.blastapi.io/d3ed394a-bb83-4d1c-bb83-12ff8708c81a",
      "https://rpc.ankr.com/eth",
    ],
    explorer: "https://etherscan.io",
    api: "https://api.etherscan.io/api?module=account&action=tokentx",
  },
  {
    network: "rinkeby",
    name: "Rinkeby Ethereum",
    chainId: 4,
    currency: "ETH",
    rpc: ["https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", "https://eth-rinkeby.alchemyapi.io/v2/7lR5N50UXB4y8URS4S9J3JPuxHWkW8uH"],
    explorer: "https://rinkeby.etherscan.io",
    api: "https://api-rinkeby.etherscan.io/api?module=account&action=tokentx",
  },
  {
    network: "polygon",
    name: "Polygon",
    chainId: 137,
    currency: "MATIC",
    rpc: [
      "https://polygon-mainnet.g.alchemy.com/v2/7lR5N50UXB4y8URS4S9J3JPuxHWkW8uH",
      "https://polygon-rpc.com",
      "https://rpc.ankr.com/polygon",
      "https://rpc-mainnet.maticvigil.com/v1/f27258bff83e00a5dde0695d9e5c54ccedc69e11",
    ],
    explorer: "https://polygonscan.com",
    api: "https://api.polygonscan.com/api?module=account&action=tokentx",
  },
  {
    network: "bsc",
    name: "Binance Smart Chain",
    chainId: 137,
    currency: "BNB",
    rpc: [
      "https://rpc.ankr.com/bsc",
      "https://bsc-dataseed1.ninicoin.io/",
      "https://bsc-dataseed1.defibit.io/",
    ],
    explorer: "https://bscscan.com",
    api: "https://api.bscscan.com/api?module=account&action=tokentx",
  },
  {
    network: 'goerli',
    name: 'Goerli Ethereum',
    value: 'goerli',
    label: 'Goerli Ethereum',
    chainId: 5,
    currency: 'ETH',
    rpc: ['https://eth-goerli.g.alchemy.com/v2/MbhgMXsdTaM8wSMpDfz5uDI-J8G_IJ3j'],
    explorer: 'https://goerli.etherscan.io',
    api: 'https://api-goerli.etherscan.io/api?module=account&action=tokentx',
  },
] as NetworkType[];
