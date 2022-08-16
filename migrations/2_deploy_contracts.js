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
	//Deploy MasterChef, SIMP Addr, Dev Addr no. 10 on truffle               //Devaddress here //                //   Feeaddress here //     // amount tokens per block // start block from polygonscan//
	await deployer.deploy(MasterChefV2, eggToken.address, '0x33c39cace33ad92579d1a1969201af58d4e3abbf', '0x33c39cace33ad92579d1a1969201af58d4e3abbf', '3', '31970635')
	const masterChefV2 = await MasterChefV2.deployed()
    
}
   