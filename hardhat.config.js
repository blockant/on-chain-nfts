require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
};

// require("dotenv").config();
// require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-etherscan");

// module.exports = {
//   defaultNetwork: "matic",
//   networks: {
//     hardhat: {},
//     polygon_mumbai: {
//       url: "https://rpc-mumbai.maticvigil.com",
//       accounts: [process.env.PRIVATE_KEY],
//     },
//   },
//   etherscan: {
//     apiKey: process.env.POLYGONSCAN_API_KEY,
//   },
//   solidity: {
//     version: "0.7.3",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };
