---
title: How to get Openverse devnet SOL (including airdrops and faucets)
sidebar_label: Get devnet BTG
---


This is a collection of the different ways for developers to acquire SOL on Openverse's testing networks, the Openverse devnet and testnet.

## Openverse Airdrop

Available on Devnet and Testnet

This is the base way of acquiring SOL, but it can be subject to rate limits when there is a high number of airdrops.

Here are three different ways of requesting airdrops with it:

### Using the Openverse CLI:

```bash
openverse airdrop 1
```

### Using web3.js:

```js
const connection = new Connection("https://api.devnet.openverse.network");
connection.requestAirdrop();
```

See more: `requestAirdrop()` documentation inside web3.js.

## Web Faucet

Available for Devnet

> [openverse.live](https://openverse.live/faucet) - A public web faucet hosted by the Openverse Foundation