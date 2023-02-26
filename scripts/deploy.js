const { ethers } = require("hardhat");

async function main() {
  const Contract = await ethers.getContractFactory("Wallet");

  console.log("Deploying contract...");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log("Contract deployed to address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


  async function deploy() {
    const MyContract = await ethers.getContractFactory("Wallet");
    console.log("Deploying contract...");
    const contract = await MyContract.deploy({
      gasLimit: 2000000, // set a lower gas limit value if needed
      gasPrice: ethers.utils.parseUnits("1", "gwei"),
    });
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);
  }
  
  deploy()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });