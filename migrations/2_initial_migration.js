const JamToken = artifacts.require('JamToken');
const StellarToken = artifacts.require('StellarToken');
const TokenFarm = artifacts.require('TokenFarm');

module.exports = async function(deployer, network, accounts) {

    // despliegue del JamToken
    await deployer.deploy(JamToken);
    const jamToken = await JamToken.deployed();
    
    // despliegue de  StekllarToken
    await deployer.deploy(StellarToken);
    const stellarToken = await StellarToken.deployed();

    // despliegue de TokenFarm
    await deployer.deploy(TokenFarm, stellarToken.address, jamToken.address);
    const tokenFarm = await TokenFarm.deployed();

    // Transferir tokens stellar a tokenFamr (1 millon de tokens )
    await stellarToken.transfer(tokenFarm.address, '1000000000000000000000000');

    // tranferir tokes de los tokens para el syaking 
    await jamToken.transfer(accounts[1], '1000000000000000000000000');
}