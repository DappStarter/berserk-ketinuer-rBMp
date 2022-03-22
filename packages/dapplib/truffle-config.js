require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note pulse purse harvest inhale flock tonight'; 
let testAccounts = [
"0x30be5244aa7d4df3208b0e22f45e4a83406ca5901f1d5fe5dc684090aa4f5b59",
"0x791e512b5af8431ecc5aaa02e1935415d570f5628e740d991d59e95ef06c3a9e",
"0xf3547c4b2c6c922a9d70447124933dab007d525ce8b5bbce401e3dcd739d49f8",
"0xadaa7018fd596352519aa81ad8699f27e2ca7c80f3060791e0dd856fdb03af80",
"0x38542a9ef8253799f53123f9adfeadb9bd947293431712bc51ec18ac5e0f0df8",
"0xe87ac3e0798b28f89f014e16d7ce35dfefd344b1a16d7be76be4747ae299e99f",
"0xdfd1907a01e91756cf7997db3982cc903d348ad4f5e389078e7c299c5e9bf62a",
"0xbbd3b850e08ae28178a85106a32490a911b10ce9cfaebf39c80e6e19407c224a",
"0xb5afa11209aff045ae762d7094f0eb23b1b63a388538db23db88804f3d0d5aef",
"0x2ac66e253840d90e21251186cd378e38253fcb11923965ef64f6f1351aba43a4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


