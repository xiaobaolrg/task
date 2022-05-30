const Web3 = require("web3");
const web3 = new Web3 (new Web3.providers.HttpProvider("https://bsc-dataseed1.defibit.io/"))

const abi = require('./abi.json');

const contractAddress = "0xA07c5b74C9B40447a954e1466938b865b6BBea36";

const account = "0xC799f35F0f5c15a189C2c2737C73702e5feD0e3a";
const private_key = process.env.SECRET_KET;

web3.eth.accounts.wallet.add(private_key);

var Contract = new web3.eth.Contract(abi, contractAddress,{
    from: account,
    gasPrice: "5000000000",
    gas: "214942",});

//提供流动性
var Mint = async () => {
    var resp = await Contract.methods.mint().send({from: account, value: 1000000000000000});
    console.log(resp.transactionHash);
};

//取出
var Redeem = async () => {
    var Balance = await Contract.methods.balanceOf(account).call();
    var resp = await Contract.methods.redeem(Balance).send({from: account});
    console.log(resp.transactionHash);
};

Mint();
Redeem();