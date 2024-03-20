require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const privateKeys = process.env.PRIVATE_KEYS || "";
const goerliApiKey = process.env.GOERLI_API_KEY;
console.log(process.env.PRIVATE_KEY)
console.log(process.env.RINKEBY_RPC_URL)
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {},

  },
};
