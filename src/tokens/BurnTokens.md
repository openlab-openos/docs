---
title: How to Burn Tokens
sidebar_label: How to Burn Tokens
---

You can burn tokens if you are the token account authority.

> ```javascript
> import { Connection, Keypair } from "openverse-web3";
> import {
>   createMint,
>   getOrCreateAssociatedTokenAccount,
>   mintTo,
>   burnChecked
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
>   const decimals = 2;
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
>   // Step 3: Mint tokens
>   const amountToMint = 100;
>   console.log("Minting tokens...");
>   const mintTx = await mintTo(
>     connection,
>     feePayer,
>     mint,
>     tokenAccount.address,
>     mintAuthority,
>     amountToMint
>   );
>   console.log("Mint transaction:", mintTx);
> 
>   // Step 4: Burn tokens
>   const amountToBurn = 50;
>   console.log("Burning tokens...");
>   const burnTx = await burnChecked(
>     connection,
>     feePayer,
>     tokenAccount.address,
>     mint,
>     feePayer,
>     amountToBurn,
>     decimals
>   );
>   console.log("Burn transaction:", burnTx);
> })();
> ```