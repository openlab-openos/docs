---
title: Getting Test SOL
sidebar_label: Getting Test SOL
---

When you're working locally, you need some BTG in order to send transactions. In non-mainnet environments you can receive BTG by airdropping it to your address:

> ```bash
>import { Connection, PublicKey, LAMPORTS_PER_SOL } from "openverse-web3";
>
>const connection = new Connection("https://api.devnet.openverse.network", "confirmed");
>
>const wallet = new PublicKey("nick6zJc6HpW3kfBm4xS2dmbuVRyb5F3AnUvj5ymzR5");
>
>/**
> * Note: the `devnet` and `testnet` clusters are subject to rate limits.
> * it is strongly recommended to use `localnet` and the local test validator
> */
>const signature = await connection.requestAirdrop(wallet, LAMPORTS_PER_SOL); // request 1 BTG >airdrop
>
>const { blockhash, lastValidBlockHeight } =
>  await connection.getLatestBlockhash();
>
>// note: confirming the airdrop transaction is very important to ensure the wallet has
>await connection.confirmTransaction({
>  blockhash,
>  lastValidBlockHeight,
>  signature
>});
>```