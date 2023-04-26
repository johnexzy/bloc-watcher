# Wallet Watcher

This is an abstract code to be integrated in the wallet wise app

## get started

```js
(async () => {
  new MainIndexer({
    // array of chains
    network: ["mainnet", "goerli"],

    // array of addresses to watch
    watchList,

    // a webhook url for the Bloc Receiver
    webHookUrl: "https://87f1-197-210-79-154.ngrok.io/webhook",
  }).init();
})();
```

Later on we'll implement a more robust `watchList` standard where addresss can be passed with its config and selection

example watchList structure 👇

```js
const watchList = [
  {
    address: "0x74....",
    blockchains: {
      mainnet: {
        subscribeToNativeTransfer: true,
        selectedTokens: [
          {
            contractAddress: "0x53...",
            tokenName: "Shiba Inu",
          },
          {
            contractAddress: "0x53...",
            tokenName: "Tether USD",
          },
        ],
      },
      polygon: null,
    },
  },

  // more
];
```
