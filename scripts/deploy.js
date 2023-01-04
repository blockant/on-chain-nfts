// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const BoredApeYachtClub = await hre.ethers.getContractFactory(
    "BoredApeYachtClub"
  );
  const boredApeYachtClub = await BoredApeYachtClub.deploy(
    "BoredApeYachtClub",
    "BAYC",
    10000,
    1619060439
  );

  await boredApeYachtClub.deployed();

  console.log(`BoredApeYachtClub deployed to ${boredApeYachtClub.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
