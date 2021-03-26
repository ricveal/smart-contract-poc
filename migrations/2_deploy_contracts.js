const ConvertLib = artifacts.require('ConvertLib')
const MetaCoin = artifacts.require('MetaCoin')
const NewCoin = artifacts.require('NewCoin')

module.exports = function (deployer) {
  deployer.deploy(ConvertLib)
  deployer.link(ConvertLib, MetaCoin)
  deployer.deploy(MetaCoin)
  deployer.deploy(NewCoin, 1000)
}
