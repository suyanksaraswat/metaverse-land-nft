const Land = artifacts.require("Land")

module.exports = async function (deployer) {
    const NAME = 'Suyank Buildings'
    const SYMBOL = 'B'
    const COST = web3.utils.toWei('1', 'ether')

    await deployer.deploy(Land, NAME, SYMBOL, COST)
}