---
title: How to Add a Memo to a Transaction
sidebar_label: How to Add a Memo to a Transaction
---

Any transaction can add a message making use of the SPL memo program.

> ```bash
>
>import {
>  Connection,
>  Keypair,
>  LAMPORTS_PER_SOL,
>  Transaction,
>  sendAndConfirmTransaction
>} from "openverse-web3";
>
>import { createMemoInstruction } from "openverse-spl-memo";
>
>// Connect to Openverse cluster
>const connection = new Connection("https://api.devnet.openverse.network", "confirmed");
>
>// Create keypair for the fee payer
>const feePayer = Keypair.generate();
>
>// Request and confirm airdrop
>const airdropSignature = await connection.requestAirdrop(
>  feePayer.publicKey,
>  LAMPORTS_PER_SOL
>);
>
>// Get latest blockhash for confirmation
>const { blockhash, lastValidBlockHeight } =
>  await connection.getLatestBlockhash();
>await connection.confirmTransaction({
>  signature: airdropSignature,
>  blockhash,
>  lastValidBlockHeight
>});
>
>// Create a memo instruction
>const memoInstruction = createMemoInstruction("Hello, World!");
>
>// Create transaction and add the memo instruction
>const transaction = new Transaction().add(memoInstruction);
>
>// Sign and send transaction
>const transactionSignature = await sendAndConfirmTransaction(
>  connection,
>  transaction,
>  [feePayer]
>);
>console.log("Transaction Signature: ", transactionSignature);
>```