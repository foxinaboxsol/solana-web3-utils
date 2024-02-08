const { Keypair } = require('@solana/web3.js')
const bs58 = require('bs58')

const secret = require('./secret.json')
console.log('secret', secret)

const bytes = Uint8Array.from(secret)
console.log('bytes', bytes)

const keypair = Keypair.fromSecretKey(bytes)
console.log('keypair', keypair)

console.log('publicKey', keypair.publicKey.toBase58())

const privateKey = bs58.encode(keypair.secretKey)
console.log('privateKey', privateKey)
