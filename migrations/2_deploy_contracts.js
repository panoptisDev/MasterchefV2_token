const EggToken = artifacts.require('EggToken')
const MasterChefV2 = artifacts.require('MasterChefV2')

module.exports = async function(deployer, network, accounts) {
	//Deploy EggToken 
	await deployer.deploy(EggToken)
	const eggToken = await EggToken.deployed()

    // GANACHE Deploy
	//Deploy MasterChef, Cake Addr, Dev Addr no. 10 on truffle
	// await deployer.deploy(MasterChefV2, eggToken.address, '0x0115e58977Bf6710Bed3Bd19Bf016e55D7b853E9', '0xCB9b5AD20C0e171F060F574AD2E446f49a37aF95', '100', '1100')
	// const masterChefV2 = await MasterChefV2.deployed()


    // BSC Testnet
	//Deploy MasterChef, Cake Addr, Dev Addr no. 10 on truffle
	await deployer.deploy(MasterChefV2, eggToken.address, '0x90a344bed9e4114D8C4D0D929E2db6ecCb2392E7', '0x2E944214dFe05869fCB2E0D425a359A730ecEF00', '100', '9265000')
	const masterChefV2 = await MasterChefV2.deployed()
    
}
   