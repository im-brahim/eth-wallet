# Project : Sample Wallet "D-App" 

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

# Tools:
Hardhat.

Solidity.

Metamask.

reactJS.

# The important files :
Wallet.sol --> is the smart contract write with solidity language.

Wallet.json --> a file generate when successfuly compiling the smart contract it inculde the metadata about the smart contract and the bytecode.

app.js --> react file for web interface.

deploy.js --> a javascript code to deploy the smart contract to the personel blockchain or to the test network. 

package.json --> records important metadata about a project which is required before publishing to NPM.


# Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node    
npx hardhat run scripts/deploy.js
```
npx hardhart node --> use to start the personel blockchain in your machine (Local).

npx hardhat compile --> to compile the smart contract to generate the Wallet.json including the bytecode of the smart contract.

npm start --> for start the web interface (react) in localhost:3000.

npx hardhat run scripts/deploy.js --network localhost --> to deploy the smart contract to the personel blockchain.