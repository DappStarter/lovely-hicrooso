require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name reflect pitch hour hunt knee swift gate'; 
let testAccounts = [
"0xb78d8dbce4f4043583bb601954466ecddeee72a5e4c41adcfacc95fee6bdd009",
"0xf0cd4dfa3777ff55c725216bfe491eb50522f104625af4696b08c36fb203ca61",
"0x861f285ef47a732cfde482c66c40da6f62754b562f23687160da21a12fab6cb5",
"0x453e0efc922580fb08b3165406163d3fad9b4bf10afaf3cfdaf95bf188d4125f",
"0xea2e5dcca214f1371bccc4b175a6a77e9d9409c7d0ce64061d9b119d36ced995",
"0xab06b430957419b9653c5a444593621173bc7e2f39ffc7a90a28784f62e6c777",
"0x29e97b27a891752c58b7586c4966512e5ca8b56883d11fc8f9949d308b2b6a47",
"0xca9e7b2b5f39a62143d061cd9e97ba38929f0b2940b90baf6c5fe681b263c9b1",
"0xa2693b2c8200a1b7670888129080155d640aab7b7ab3fcf1ffde12dc7a123e6e",
"0xc1d97f77b30a2728a6ca0414fc102b54eaa881801f3270edfaf23be7d0da65df"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
