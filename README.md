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

# Loot

Taken the smart contract from [here](https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7#code)

- [x] Compiled

- [x] Deployed  
       Loot deployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3

- [x] Deployed to Polygon Mumbai  
       Loot Contract Deployed 0x21106f617257f297E4dAAFDCF7bECF47edA194C0

With script `npx hardhat run scripts/deployToMumbai.js --network polygon_mumbai`

- [x] Verfied on PolygonScan

       Compiled 1 Solidity file successfully
       Successfully submitted source code for contract
       contracts/Loot.sol:Loot at 0x21106f617257f297E4dAAFDCF7bECF47edA194C0
       for verification on the block explorer. Waiting for verification result...

       Successfully verified contract Loot on Etherscan.
       https://mumbai.polygonscan.com/address/0x21106f617257f297E4dAAFDCF7bECF47edA194C0#code

with script `npx hardhat verify 0x21106f617257f297E4dAAFDCF7bECF47edA194C0 --network polygon_mumbai`
