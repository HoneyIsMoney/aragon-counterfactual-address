const counterfactual = require('aragon-app-counterfactual')
const ethers = require('ethers');

const provider = ethers.getDefaultProvider('rinkeby')

const main = async () => {
    address = await counterfactual('0xD85B9340461357dfF6C7417433484C8Eff179dA8', 0, provider)
    console.log(address)
}

main()
    .then(() => {
        process.exit();
    })
    .catch((e) => {
        console.error(e);
        process.exit();
    });