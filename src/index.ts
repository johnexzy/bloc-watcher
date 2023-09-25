import dotenv from 'dotenv'
import watchList from "./seeds/watchList";
import MainIndexer from './indexer';
dotenv.config();

(async () => {
  new MainIndexer({
    network: ['mainnet', 'goerli'],
    watchList,
    webHookUrl: 'https://bloc-reciever.onrender.com/webhook'
  }).init()
})();
