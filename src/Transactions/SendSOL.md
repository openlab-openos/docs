---
title: How to Send SOL
sidebar_label: How to Send SOL
---

To send SOL, you will need to interact with the SystemProgram.

> ```bash
>
>import {
>  Connection,
>  Keypair,
>  SystemProgram,
>  LAMPORTS_PER_SOL,
>  Transaction,
>  sendAndConfirmTransaction
>} from "openverse-web3";
>
>const fromKeypair = Keypair.generate();
>const toKeypair = Keypair.generate();
>
>const connection = new Connection("https://api.devnet.openverse.network", "confirmed");
>
>const airdropSignature = await connection.requestAirdrop(
>  fromKeypair.publicKey,
>  LAMPORTS_PER_SOL
>);
>
>await connection.confirmTransaction(airdropSignature);
>
>const lamportsToSend = 1_000_000;
>
>const transferTransaction = new Transaction().add(
>  SystemProgram.transfer({
>    fromPubkey: fromKeypair.publicKey,
>    toPubkey: toKeypair.publicKey,
>    lamports: lamportsToSend
>  })
>);
>
>await sendAndConfirmTransaction(connection, transferTransaction, [fromKeypair]);
>```