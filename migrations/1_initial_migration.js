const Migrations = artifacts.require("Migrations");
const DMTokenRegistry = artifacts.require("DMTokenRegistry");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(DMTokenRegistry);
};
