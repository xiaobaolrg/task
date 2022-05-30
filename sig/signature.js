var Web3 = require("web3")

const web3 = new Web3("https://bsc-dataseed1.defibit.io/")

var Function = [
    "name()",
    "symbol()",
    "decimals()",
    "totalSupply()",
    "balanceOf(address)",
    "transfer(address,uint256)",
    "transferFrom(address,address,uint256)",
    "approve(address, uint256)",
    "allowance(address,address)"];


var Event = [
    "Transfer(address,address,uint256)",
    "Approval(address,address,uint256)"];

var Sig =()=>{
    for (let i = 0; i < Function.length; i++) {
        console.log('The function name is:' + Function[i] + ', ' + 'convert result is: ' + web3.eth.abi.encodeFunctionSignature(Function[i]));
    }
    for (let i = 0; i < Event.length; i++) {
        console.log('The event name is:' + Event[i] + ', ' + 'convert result is: ' + web3.eth.abi.encodeEventSignature(Event[i]));
    }
}
Sig()