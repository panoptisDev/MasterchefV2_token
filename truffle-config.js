const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
require('dotenv').config();
module.exports = {
  plugins: ['truffle-plugin-verify'],

  api_keys: {
    polygonscan: process.env.POLYGONSCAN_API,
    bscscan: process.env.BSCSCAN_API,
  },

  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    maticTest: {
      provider: () => new HDWalletProvider(mnemonic, `https://matic-testnet-archive-rpc.bwarelabs.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
    maticMain: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-mainnet.g.alchemy.com/v2/5z3P5YV9xnR1h7dO-wJa7uT_Rj3Wvs8j`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
    bscTest: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s3.binance.org:8545'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
    bscMain: {
      provider: () => new HDWalletProvider(mnemonic, 'https://bsc-dataseed1.binance.org'),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 2000,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
     timeout: 10000
  },

  // contracts_directory: 'contracts/',
  // contracts_build_directory: 'abis/',
  
  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.6.12", // A version or constraint - Ex. "^0.5.0"
      settings: {
        optimizer: {
          enabled: true,
          runs: 999
        }
      }
    }
  }
}
