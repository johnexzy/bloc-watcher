import { WalletCfig } from "types/types";

const watchList = [
  "0x638462aA0033B71CB27Fbb8eA645057127AD559e",
  "0xf7F8DCf8962872421373FF5cf2C4bB06357b7133",
  "0x27899fface558bde9f284ba5c8c91ec79ee60fd6",
  "0x967416cabefb17c316fca641e944d51126707306",
  "0x1136B25047E142Fa3018184793aEc68fBB173cE4",
  "0x5B80a653F4044C30614889Dc3144bd6c02eD7607",
  "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640",
  "0x4cadECc51feB5C1f6d9A902ECc817A1B8c2246F9",
  "0x80c67432656d59144ceff962e8faf8926599bcf8",
  "0xe7986b0622f348e7fcc592e781baa94a5be62513",
  "0x39758b01F9AE8be0E97A92974e40a1Ab1EBF7e47",
  "0x490428E0Dd77227FDE488833d3979B56a18eDaE9",
  "0xAdc2A7015F906259f35b5Dd2A167FA9b14F0a51b",
  "0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990",
  "0xAFBa0bE1319c20c499507d18BEBF693E23dEb5F1",
  "0x95254aadAf215a98d58C994CBc3Cc22dfc9dcB25",
];

export default {
  mainnet: {
    tokens: [
      {
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        name: "USD Coin",
        symbol: "USD",
        watchList: watchList,
      },
    ],
    native: watchList,
  },
  goerli: {
    tokens: [
      {
        address: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
        name: "USD Coin",
        symbol: "USD",
        watchList: watchList,
      },
    ],
    native: watchList,
  },
} as WalletCfig;
