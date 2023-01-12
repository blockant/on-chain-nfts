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

# ForgottenRunes

### ERROR:

line no:155

```
function setBaseURI(string memory _newBaseURI) public onlyOwner {
        _setBaseURI(_newBaseURI);
    }
```

there's no such \_setBaseURI in any library that updates base URI of contract which is required at the time of deployement.
