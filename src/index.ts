import dotenv from 'dotenv'
import watchList from "./seeds/watchList";
import MainIndexer from './indexer';
dotenv.config();

(async () => {
  new MainIndexer({
    network: ['mainnet', 'goerli'],
    watchList,
    webHookUrl: 'https://87f1-197-210-79-154.ngrok.io/webhook'
  }).init()
})();
