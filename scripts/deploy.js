const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying DIDRegistry contract with deployer:", deployer.address);

  const DIDRegistry = await hre.ethers.getContractFactory("d5f1b1745ada411b8d51faa976ca72f6");
  const registry = await DIDRegistry.deploy();

  await registry.deployed();

  console.log("✅ DIDRegistry contract deployed at:", registry.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
