---
title: How to Create a Token Account
sidebar_label: How to Create a Token Account
---

A token account is required for a user to hold tokens.

A user will have at least one token account for every type of token they own.

Associated Token Accounts (ATAs) are deterministically created accounts for every keypair. ATAs are the recommended method of managing token accounts.

> ```javascript
> import {
>   clusterApiUrl,
>   Connection,
>   PublicKey,
>   Keypair,
>   Transaction,
>   sendAndConfirmTransaction
> } from "openverse-web3";
> import {
>   getAssociatedTokenAddress,
>   createAssociatedTokenAccountInstruction,
>   createAssociatedTokenAccountIdempotent,
>   TOKEN_2022_PROGRAM_ID
> } from "open-token-web3";
> import bs58 from "bs58";
> 
> (async () => {
>   // connection
>   const connection = new Connection(
>     clusterApiUrl("https://api.devnet.openverse.network"),
>     "confirmed"
>   );
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
>   const mintPubkey = new PublicKey(
>     "8mAKLjGGmjKTnmcXeyr3pr7iX13xXVjJJiL6RujDbSPV"
>   );
> 
>   {
>     let ata = await createAssociatedTokenAccountIdempotent(
>       connection, // connection
>       feePayer, // fee payer
>       mintPubkey, // mint
>       alice.publicKey, // owner
>       undefined,
>       TOKEN_2022_PROGRAM_ID
>     );
>     console.log(`ATA: ${ata.toBase58()}`);
>   }
> })();
> ```