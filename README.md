# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# BAYC

Taken the smart contract from [here](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d#code)

- [x] Compiled

- [x] Deployed  
       BoredApeYachtClub deployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3

- [x] Deployed on Polygon Mumbai Testnest
      BoredApeYachtClub deployed to 0x0d48591ac4c604734E63856fABcB7D16fd9fdc1C

With script `npx hardhat run scripts/deploy.js --network polygon_mumbai`

- [x] Verified on PolygonScan

       Successfully submitted source code for contract
       contracts/BoredApeyatchClub.sol:BoredApeYachtClub at 0x0d48591ac4c604734E63856fABcB7D16fd9fdc1C
       for verification on the block explorer. Waiting for verification result...

       Successfully verified contract BoredApeYachtClub on Etherscan.
       https://mumbai.polygonscan.com/address/0x0d48591ac4c604734E63856fABcB7D16fd9fdc1C#code

with script `npx hardhat verify 0x0d48591ac4c604734E63856fABcB7D16fd9fdc1C "BoredApeYachtClub" "BAYC" "10000" "1619060439" --network polygon_mumbai`
