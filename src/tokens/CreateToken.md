---
title: How to Create a Token
sidebar_label: How to Create a Token
---

Creating tokens is done by creating what is called a "mint account". This mint account is later used to mint tokens to a user's Associated Token Account (ATA).

> ```javascript
> import {
>   clusterApiUrl,
>   Connection,
>   Keypair,
>   sendAndConfirmTransaction,
>   SystemProgram,
>   Transaction
> } from "openverse-web3";
> import {
>   createInitializeMintInstruction,
>   TOKEN_PROGRAM_ID,
>   MINT_SIZE,
>   getMinimumBalanceForRentExemptMint,
>   createMint
> } from "open-token-web3";
> import bs58 from "bs58";
> 
> (async () => {
>   // connection
>   const connection = new Connection(
>     clusterApiUrl("https://api.devnet.openverse.network"),
>     "confirmed"
>   );
>   const recentBlockhash = await connection.getLatestBlockhash();
> 
>   // 5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8
>   const feePayer = Keypair.fromSecretKey(
>     bs58.decode(
>       "588FU4PktJWfGfxtzpAAXywSNt74AvtroVzGfKkVN1LwRuvHwKGr851uH8czM5qm4iqLbs1kKoMKtMJG4ATR7Ld2"
>     )
>   );
>   const airdropSig = await connection.requestAirdrop(
>     feePayer.publicKey,
>     1000000000
>   );
>   await connection.confirmTransaction(airdropSig);
> 
>   // G2FAbFQPFa5qKXCetoFZQEvF9BVvCKbvUZvodpVidnoY
>   const alice = Keypair.fromSecretKey(
>     bs58.decode(
>       "4NMwxzmYj2uvHuq8xoqhY8RXg63KSVJM1DXkpbmkUY7YQWuoyQgFnnzn6yo3CMnqZasnNPNuAT2TLwQsCaKkUddp"
>     )
>   );
> 
>   // 1) use build - in function
>   let mintPubkey = await createMint(
>     connection, // connection
>     feePayer, // fee payer
>     alice.publicKey, // mint authority
>     alice.publicKey, // freeze authority (you can use `null` to disable it. when you disable it, you can't turn it on again)
>     8 // decimals
>   );
>   console.log(`mint: ${mintPubkey.toBase58()}`);
> 
>   // or
> 
>   // 2) compose by yourself
>   const mint = Keypair.generate();
>   console.log(`mint: ${mint.publicKey.toBase58()}`);
> 
>   const transaction = new Transaction().add(
>     // create mint account
>     SystemProgram.createAccount({
>       fromPubkey: feePayer.publicKey,
>       newAccountPubkey: mint.publicKey,
>       space: MINT_SIZE,
>       lamports: await getMinimumBalanceForRentExemptMint(connection),
>       programId: TOKEN_PROGRAM_ID
>     }),
>     // init mint account
>     createInitializeMintInstruction(
>       mint.publicKey, // mint pubkey
>       8, // decimals
>       alice.publicKey, // mint authority
>       alice.publicKey // freeze authority (you can use `null` to disable it. when you disable it, you can't turn it on again)
>     )
>   );
> 
>   // Send transaction
>   const transactionSignature = await sendAndConfirmTransaction(
>     connection,
>     transaction,
>     [feePayer, mint] // Signers
>   );
> 
>   console.log(`txhash: ${transactionSignature}`);
> })();
> ```