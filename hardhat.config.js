require("@nomicfoundation/hardhat-toolbox");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: './src/artifacts',
  },

  networks: {
    hardhat:{
      chainId: 1337
    } 
  }


  //const INFURA_API_KEY = "<YOUR_INFURA_API_KEY>";

/*
networks: {
  goerli: {
    url: "https://goerli.infura.io/v3/${INFURA_API_KEY}",
    accounts: {
      mnemonic: "Your mnemonic of your Metamask wallet",
    },
  },
},
*/

};