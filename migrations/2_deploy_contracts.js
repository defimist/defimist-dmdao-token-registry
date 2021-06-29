var DMTokenRegistry = artifacts.require("DMTokenRegistry");

module.exports = function(deployer){
  deployer.deploy(DMTokenRegistry);
};