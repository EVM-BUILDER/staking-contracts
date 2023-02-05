// import { ethers } from "hardhat";
var Accounts = require('web3-eth-accounts');

const JSONRPC_URL = process.env.JSONRPC_URL ?? "";
const accounts = new Accounts(JSONRPC_URL)

async function main() {
    const data = await accounts.create();

    console.log(data);
    
    console.log("Account Created");
    console.log("address", data.address);
    console.log("privateKey", data.privateKey);
    // console.log("signTransaction", data.signTransaction);
    // console.log("sign", data.sign);
    // console.log("encrypt", data.encrypt);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
