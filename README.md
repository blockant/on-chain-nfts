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

With script `npx hardhat run scripts/deploy.js`

- [x] Deployed to Polygon Mumbai  
       AvastarPrimeMinter eployed to 0xC7bAC918F161630b07728C4fFe59e1e28E7eFFA8

With script `npx hardhat run scripts/deploy.js --network polygon_mumbai`
