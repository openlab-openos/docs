---
title: How to Send Tokens
sidebar_label: How to Send Tokens
---

Use the Token Program or the Token Extensions Program (aka Token22) to transfer SPL Tokens. In order to send a SPL token, you need to know its Associated Token Account (ATA) address, which is derived from:

- the destination wallet
- the token mint address
- the token program used to create the mint

You can both get the token account's address and send tokens to it with the following examples:

> ```javascript
> import {
>   Connection,
>   clusterApiUrl,
>   Keypair,
>   LAMPORTS_PER_SOL,
>   Transaction,
>   sendAndConfirmTransaction
> } from "openverse-web3";
> import {
>   createMint,
>   getOrCreateAssociatedTokenAccount,
>   mintTo,
>   createTransferInstruction
> } from "open-token-web3";
> import bs58 from "bs58";
> 
> (async () => {
>   // Connect to cluster
>   const connection = new Connection("https://api.devnet.openverse.network", "confirmed");
> 
>   // Generate a new wallet keypair and airdrop SOL
>   const fromWallet = Keypair.fromSecretKey(
>     bs58.decode(
>       "588FU4PktJWfGfxtzpAAXywSNt74AvtroVzGfKkVN1LwRuvHwKGr851uH8czM5qm4iqLbs1kKoMKtMJG4ATR7Ld2"
>     )
>   );
> 
>   const fromAirdropSignature = await connection.requestAirdrop(
>     fromWallet.publicKey,
>     LAMPORTS_PER_SOL
>   );
>   // Wait for airdrop confirmation
>   await connection.confirmTransaction(fromAirdropSignature);
> 
>   // Generate a new wallet to receive newly minted token
>   const toWallet = Keypair.generate();
> 
>   // Create new token mint
>   const mint = await createMint(
>     connection,
>     fromWallet,
>     fromWallet.publicKey,
>     null,
>     9
>   );
> 
>   // Get the token account of the fromWallet Openverse address, if it does not exist, create it
>   const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
>     connection,
>     fromWallet,
>     mint,
>     fromWallet.publicKey
>   );
> 
>   //get the token account of the toWallet Openverse address, if it does not exist, create it
>   const toTokenAccount = await getOrCreateAssociatedTokenAccount(
>     connection,
>     fromWallet,
>     mint,
>     toWallet.publicKey
>   );
> 
>   // Minting 1 new token to the "fromTokenAccount" account we just returned/created
>   await mintTo(
>     connection,
>     fromWallet,
>     mint,
>     fromTokenAccount.address,
>     fromWallet.publicKey,
>     1000000000, // it's 1 token, but in lamports
>     []
>   );
> 
>   // Add token transfer instructions to transaction
>   const transaction = new Transaction().add(
>     createTransferInstruction(
>       fromTokenAccount.address,
>       toTokenAccount.address,
>       fromWallet.publicKey,
>       1
>     )
>   );
> 
>   // Sign transaction, broadcast, and confirm
>   await sendAndConfirmTransaction(connection, transaction, [fromWallet]);
> })();
> ```