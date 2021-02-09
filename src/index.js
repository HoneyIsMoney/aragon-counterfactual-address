#!/usr/bin/env node
const ethers = require('ethers');
const utils = require('ethers/utils');
const {keccak256} = require('web3-utils');
const {RLP} = utils;


async function buildNonceForAddress(_address, _index, _provider) {
    const txCount = await _provider.getTransactionCount(_address);
    return `0x${(txCount + _index).toString(16)}`;
}

async function calculateNewProxyAddress(_daoAddress, _nonce) {
    const rlpEncoded = RLP.encode([_daoAddress, _nonce]);
    const contractAddressLong = keccak256(rlpEncoded);
    const contractAddress = `0x${contractAddressLong.substr(-40)}`;

    return contractAddress;
}

async function address (dao, index, provider) {
    const nonce = await buildNonceForAddress(dao, index, provider)
    const counterfactual = await calculateNewProxyAddress(dao, nonce)
    return counterfactual
}

module.exports = address;