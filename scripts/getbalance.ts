const Web3 = require('web3')
const web3 = new Web3(process.env.JSONRPC_URL)

async function main() {
    const privateKey = "0x"+ process.env.PRIVATE_KEYS;
    console.log("Private Key: ", privateKey);
    const {address} = await web3.eth.accounts.privateKeyToAccount(privateKey);
    console.log("Address: ", address);
    const balance = await web3.eth.getBalance(address);
    console.log("balance", balance);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
