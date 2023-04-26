

// export const marascanAddresses = [
//   {
//     network: 'mainnet',
//     address: '',
//   },
//   {
//     network: 'goerli',
//     address: Env.get('MARASCAN_PROXY_CONTRACT_ADDRESS'),
//   },
//   {
//     network: 'polygon',
//     address: Env.get('MARASCAN_PROXY_CONTRACT_ADDRESS'),
//   },
//   {
//     network: 'bsc',
//     address: '',
//   },
// ] as { network: string; address: string }[]

// export const marascanOperationAddresses = [
//   {
//     network: 'mainnet',
//     address: '',
//   },
//   {
//     network: 'goerli',
//     address: Env.get('MARASCAN_OPERATION_PROXY_CONTRACT_ADDRESS'),
//   },
//   {
//     network: 'polygon',
//     address: Env.get('MARASCAN_OPERATION_PROXY_CONTRACT_ADDRESS'),
//   },
//   {
//     network: 'bsc',
//     address: '',
//   },
// ] as { network: string; address: string }[]

export const usdcAddresses = [
  {
    network: 'mainnet',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  },
  {
    network: 'goerli',
    address: process.env.USDC_CONTRACT_ADDRESS,
  },
  {
    network: 'polygon',
    address: process.env.USDC_CONTRACT_ADDRESS,
  },
  {
    network: 'bsc',
    address: '',
  },
] as { network: string; address: string }[]
