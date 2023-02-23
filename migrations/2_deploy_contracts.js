//const LakeToken = artifacts.require("LakeToken.sol");
const MasterChefV2 = artifacts.require("MasterChefV2.sol");

module.exports = async function (deployer, network, addresses) {
    //await deployer.deploy(LakeToken);
    //const laketoken = await LakeToken.deployed();
    // laketoken, devaddr, feeaddr, laketokenPerBlock, startBlock
    //await deployer.deploy(MasterChefV2, laketoken.address, '0x770d34487A8cDBE69906A08A88455EefF1a75c46', '0x770d34487A8cDBE69906A08A88455EefF1a75c46', '10', 1677115744);
    //const masterChefV2 = await MasterChefV2.deployed();
    await deployer.deploy(MasterChefV2, '0x95963AF52b346dDB68A4D0742C86f451D3fe92A1', '0x770d34487A8cDBE69906A08A88455EefF1a75c46', '0x770d34487A8cDBE69906A08A88455EefF1a75c46', '10', 27477606);
    const masterChefV2 = await MasterChefV2.deployed();
};
/*
// if you want to deploy a existing token address
module.exports = async function (deployer, network, addresses) {
    // laketoken, devaddr, feeaddr, laketokenPerBlock, startBlock
  await deployer.deploy(MasterChefV2, '0x95963AF52b346dDB68A4D0742C86f451D3fe92A1', '0x770d34487A8cDBE69906A08A88455EefF1a75c46', '0x770d34487A8cDBE69906A08A88455EefF1a75c46', '10', 27477606);
  const masterChefV2 = await MasterChefV2.deployed();
};*/
