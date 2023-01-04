const hre = require("hardhat");

async function main() {
  const Loot = await hre.ethers.getContractFactory("Loot");
  const loot = await Loot.deploy();

  await loot.deployed();

  console.log(`Loot Contract Deployed Polygon Mumbai Testnet: ${loot.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
