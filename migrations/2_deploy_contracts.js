var Bank = artifacts.require("Bank");
var AssetManager = artifacts.require("AssetManager");

module.exports = function(deployer) {
  deployer.deploy(Bank);
  deployer.deploy(AssetManager);
};
