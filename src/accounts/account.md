---
title: How to Create an Account
sidebar_label: How to Create an Account
---

Creating an account requires using the System Program `createAccount` instruction. The Openverse runtime will grant the owner program of an account, access to write to its data or transfer lamports. When creating an account, we have to preallocate a fixed storage space in bytes (space) and enough lamports to cover the rent.

> ```bash
>
>import {
>  SystemProgram,
>  Keypair,
>  Transaction,
>  sendAndConfirmTransaction,
>  Connection,
>  clusterApiUrl,
>  LAMPORTS_PER_SOL
>} from "openverse-web3";
>
>const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
>
>const fromKeypair = Keypair.generate();
>const newAccount = Keypair.generate();
>
>// Airdrop BTG for transferring lamports to the created account
>const airdropSignature = await connection.requestAirdrop(
>  fromKeypair.publicKey,
>  LAMPORTS_PER_SOL
>);
>await connection.confirmTransaction(airdropSignature);
>
>// amount of space to reserve for the account
>const space = 0;
>
>// Seed the created account with lamports for rent exemption
>const rentLamports = await connection.getMinimumBalanceForRentExemption(space);
>
>const createAccountTransaction = new Transaction().add(
>  SystemProgram.createAccount({
>    fromPubkey: fromKeypair.publicKey,
>    newAccountPubkey: newAccount.publicKey,
>    lamports: rentLamports,
>    space,
>    programId: SystemProgram.programId
>  })
>);
>
>await sendAndConfirmTransaction(connection, createAccountTransaction, [
>  fromKeypair,
>  newAccount
>]);
>```