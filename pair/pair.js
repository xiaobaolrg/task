const Web3 = require("web3");
const web3 = new Web3("https://bsc-dataseed1.defibit.io/")
const fs = require('fs')
const abi = require('./abi.json');

var Contract = new web3.eth.Contract(abi, "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73");

var Solve = async () => {
    const length = await Contract.methods.allPairsLength().call();
    console.log("The total length is:"+length);
    for(var index = 0; index < length; index++){
        var data = await Contract.methods.allPairs(index).call();
        fs.appendFile('address_pair.txt',String(index) + "," + data + "\n" , function (err) {
            if (err) throw err;

        });
        console.log(data);
    }
};
Solve();
