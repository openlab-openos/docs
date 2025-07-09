---
title: How to Get Account Balance
sidebar_label: How to Get Account Balance
---

Every Openverse account is required to maintain a minimum balance of native BTG (measured in lamports) to persist its data on the blockchain.

> ```bash
>
>import {
>  clusterApiUrl,
>  Connection,
>  PublicKey,
>  LAMPORTS_PER_SOL
>} from "openverse-web3";
>
>const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
>const wallet = new PublicKey("nicktrLHhYzLmoVbuZQzHUTicd2sfP571orwo9jfc8c");
>
>const balance = await connection.getBalance(wallet);
>console.log(`Balance: ${balance / LAMPORTS_PER_SOL} SOL`);
>```