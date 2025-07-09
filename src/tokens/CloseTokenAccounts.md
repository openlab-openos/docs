---
title: How to Close Token Accounts
sidebar_label: How to Close Token Accounts
---

You can close a token account if you don't want to use it anymore. There are two situations:

- Wrapped BTG - Closing converts Wrapped BTG to SOL
- Other Tokens - You can close it only if token account's balance is 0.

> ```javascript
> import { Connection, Keypair } from "openverse-web3";
> import {
>   createMint,
>   getOrCreateAssociatedTokenAccount,
>   closeAccount
> } from "open-token-web3";
> 
> (async () => {
>   // Connect to local Openverse node
>   const connection = new Connection("https://api.devnet.openverse.network", "confirmed");
> 
>   // Create a fee payer account
>   const feePayer = Keypair.generate();
> 
>   // Request airdrop for fee payer
>   const airdropSig = await connection.requestAirdrop(
>     feePayer.publicKey,
>     1000000000
>   );
>   await connection.confirmTransaction(airdropSig);
> 
>   // Step 1: Create a new mint
>   const mintAuthority = feePayer;
>   const freezeAuthority = feePayer;
>   const decimals = 8;
> 
>   console.log("Creating mint...");
>   const mint = await createMint(
>     connection,
>     feePayer,
>     mintAuthority.publicKey,
>     freezeAuthority.publicKey,
>     decimals
>   );
>   console.log("Mint created:", mint.toBase58());
> 
>   // Step 2: Create Associated Token Account
>   console.log("Creating token account...");
>   const tokenAccount = await getOrCreateAssociatedTokenAccount(
>     connection,
>     feePayer,
>     mint,
>     feePayer.publicKey
>   );
>   console.log("Token account:", tokenAccount.address.toBase58());
> 
>   // Step 3: Close the token account
>   const txSignature = await closeAccount(
>     connection, // connection
>     feePayer, // payer
>     tokenAccount.address, // token account which you want to close
>     feePayer.publicKey, // destination
>     feePayer // owner of token account
>   );
>   console.log("Close Token Account:", txSignature);
> })();
> ```