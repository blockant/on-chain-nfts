# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# AvastarPrimeMinter

Taken the smart contract from [here](https://rinkeby.etherscan.io/address/0x276c42D14067294747AA2f5d2F8E6e49864b306E#code)

- [x] Compiled

- [x] Deployed  
       AvastarPrimeMinter eployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3

With script `npx hardhat run scripts/PrimeMinterDeploy.js`

- [x] Deployed to Polygon Mumbai  
       AvastarPrimeMinter eployed to 0xC7bAC918F161630b07728C4fFe59e1e28E7eFFA8

- [x] Verified on PolygonScan  
       Nothing to compile
      Successfully submitted source code for contract
      contracts/AvastarPrimeMinter.sol:AvastarPrimeMinter at 0xC7bAC918F161630b07728C4fFe59e1e28E7eFFA8
      for verification on the block explorer. Waiting for verification result...

       Successfully verified contract AvastarPrimeMinter on Etherscan.
       https://mumbai.polygonscan.com/address/0xC7bAC918F161630b07728C4fFe59e1e28E7eFFA8#code

with script `npx hardhat verify 0xC7bAC918F161630b07728C4fFe59e1e28E7eFFA8 --network polygon_mumbai`

With script `npx hardhat run scripts/PrimeMinterDeploy.js --network polygon_mumbai`

# AvastarTeleporter

Taken the smart contract from [here](https://rinkeby.etherscan.io/address/0x30e011460ab086a0daa117df3c87ec0c283a986e#code)

- [x] Compiled

- [x] Deployed  
       error while locally deploying  
       `Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="Transaction reverted: trying to deploy a contract whose code is too large", method="estimateGas",`  
       Unable to estimate gas, looking for a way to define gas in hardhat config without any network mentions

With script `npx hardhat run scripts/TelePorterDeploy.js`

- [x] Deployed to Polygon Mumbai  
       AvastarTeleporter deployed to 0xa4212f7660C1AfC01B304e3F9afA3547146C104c

With script `npx hardhat run scripts/TeleporterDeploy.js --network polygon_mumbai`

- [x] Verified on PolygonScan  
       Nothing to compile
      Successfully submitted source code for contract
      contracts/AvastarTeleporter.sol:AvastarTeleporter at 0xa4212f7660C1AfC01B304e3F9afA3547146C104c
      for verification on the block explorer. Waiting for verification result...

       Successfully verified contract AvastarTeleporter on Etherscan.
       https://mumbai.polygonscan.com/address/0xa4212f7660C1AfC01B304e3F9afA3547146C104c#code

with script `npx hardhat verify 0xa4212f7660C1AfC01B304e3F9afA3547146C104c --network polygon_mumbai`

# AvastarMetadata

Taken the smart contract from [here](https://rinkeby.etherscan.io/address/0x64f241f435bb11a035d4e2c139068a2ed979bb39#code)

- [x] Compiled

- [x] Deployed  
       AvastarTeleporter deployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3

With script `npx hardhat run scripts/MetadatDeploy.js`

- [x] Deployed to Polygon Mumbai  
       AvastarTeleporter deployed to 0xCF92b0d6d462f6086f663abf57DEa4D72d45948F

With script `npx hardhat run scripts/MetadataDeploy.js --network polygon_mumbai`

- [x] Verfied on PolygonScan

       Nothing to compile
       Successfully submitted source code for contract
       contracts/AvastarMetadata.sol:AvastarMetadata at 0xCF92b0d6d462f6086f663abf57DEa4D72d45948F
       for verification on the block explorer. Waiting for verification result...

       Successfully verified contract AvastarMetadata on Etherscan.
       https://mumbai.polygonscan.com/address/0xCF92b0d6d462f6086f663abf57DEa4D72d45948F#code

with script `npx hardhat verify 0xCF92b0d6d462f6086f663abf57DEa4D72d45948F --network polygon_mumbai`
