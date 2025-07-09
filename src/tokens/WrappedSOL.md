---
title: How to Use Wrapped SOL
sidebar_label: How to Use Wrapped SOL
---

Wrapped BTG is just like any other token mint. The difference is using syncNative and creating token accounts specifically on the NATIVE_MINT address.

## Create Token Account

Like creating SPL token accounts but replace mint with NATIVE_MINT

> import { NATIVE_MINT } from "open-token-web3";

## Add Balance

There are two ways to add balance for Wrapped SOL

### 1. By BTG Transfer

> ```javascript
> import {
>   clusterApiUrl,
>   Connection,
>   Keypair,
>   Transaction,
>   SystemProgram,
>   sendAndConfirmTransaction
> } from "openverse-web3";
> import {
>   NATIVE_MINT,
>   getAssociatedTokenAddress,
>   createSyncNativeInstruction,
>   TOKEN_2022_PROGRAM_ID
> } from "open-token-web3";
> import bs58 from "bs58";
> 
> (async () => {
>   // connection
>   const connection = new Connection("https://api.devnet.openverse.network", "confirmed");
> 
>   // 5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8
>   const feePayer = Keypair.fromSecretKey(
>     bs58.decode(
>       "588FU4PktJWfGfxtzpAAXywSNt74AvtroVzGfKkVN1LwRuvHwKGr851uH8czM5qm4iqLbs1kKoMKtMJG4ATR7Ld2"
>     )
>   );
>   var airdropSig = await connection.requestAirdrop(
>     feePayer.publicKey,
>     10000000000
>   );
>   await connection.confirmTransaction(airdropSig);
> 
>   console.log(NATIVE_MINT);
> 
>   // G2FAbFQPFa5qKXCetoFZQEvF9BVvCKbvUZvodpVidnoY
>   const alice = Keypair.fromSecretKey(
>     bs58.decode(
>       "4NMwxzmYj2uvHuq8xoqhY8RXg63KSVJM1DXkpbmkUY7YQWuoyQgFnnzn6yo3CMnqZasnNPNuAT2TLwQsCaKkUddp"
>     )
>   );
>   var airdropSig = await connection.requestAirdrop(
>     alice.publicKey,
>     10000000000
>   );
>   await connection.confirmTransaction(airdropSig);
> 
>   // remember to create ATA first
>   let ata = await getAssociatedTokenAddress(
>     NATIVE_MINT, // mint
>     alice.publicKey, // owner
>     undefined,
>     TOKEN_2022_PROGRAM_ID
>   );
> 
>   let amount = 1 * 1e9; /* Wrapped SOL's decimals is 9 */
> 
>   let tx = new Transaction().add(
>     // transfer SOL
>     SystemProgram.transfer({
>       fromPubkey: alice.publicKey,
>       toPubkey: ata,
>       lamports: amount
>     }),
>     // sync wrapped BTG balance
>     createSyncNativeInstruction(ata)
>   );
>   console.log(
>     `txhash: ${await sendAndConfirmTransaction(connection, tx, [feePayer, alice])}`
>   );
> })();
> ```

### 2. By Token Transfer

> ```javascript
> import {
>   clusterApiUrl,
>   Connection,
>   Keypair,
>   Transaction,
>   SystemProgram,
>   sendAndConfirmTransaction
> } from "openverse-web3";
> import {
>   TOKEN_PROGRAM_ID,
>   NATIVE_MINT,
>   getMinimumBalanceForRentExemptAccount,
>   getAssociatedTokenAddress,
>   ACCOUNT_SIZE,
>   createInitializeAccountInstruction,
>   createTransferInstruction,
>   createCloseAccountInstruction
> } from "open-token-web3";
> import bs58 from "bs58";
> 
> (async () => {
>   // connection
>   const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
> 
>   // 5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8
>   const feePayer = Keypair.fromSecretKey(
>     bs58.decode(
>       "588FU4PktJWfGfxtzpAAXywSNt74AvtroVzGfKkVN1LwRuvHwKGr851uH8czM5qm4iqLbs1kKoMKtMJG4ATR7Ld2"
>     )
>   );
> 
>   // G2FAbFQPFa5qKXCetoFZQEvF9BVvCKbvUZvodpVidnoY
>   const alice = Keypair.fromSecretKey(
>     bs58.decode(
>       "4NMwxzmYj2uvHuq8xoqhY8RXg63KSVJM1DXkpbmkUY7YQWuoyQgFnnzn6yo3CMnqZasnNPNuAT2TLwQsCaKkUddp"
>     )
>   );
> 
>   // remember to create ATA first
>   let ata = await getAssociatedTokenAddress(
>     NATIVE_MINT, // mint
>     alice.publicKey // owner
>   );
> 
>   let auxAccount = Keypair.generate();
>   let amount = 1 * 1e9; /* Wrapped SOL's decimals is 9 */
> 
>   let tx = new Transaction().add(
>     // create token account
>     SystemProgram.createAccount({
>       fromPubkey: alice.publicKey,
>       newAccountPubkey: auxAccount.publicKey,
>       space: ACCOUNT_SIZE,
>       lamports:
>         (await getMinimumBalanceForRentExemptAccount(connection)) + amount, // rent + amount
>       programId: TOKEN_PROGRAM_ID
>     }),
>     // init token account
>     createInitializeAccountInstruction(
>       auxAccount.publicKey,
>       NATIVE_MINT,
>       alice.publicKey
>     ),
>     // transfer WSOL
>     createTransferInstruction(
>       auxAccount.publicKey,
>       ata,
>       alice.publicKey,
>       amount
>     ),
>     // close aux account
>     createCloseAccountInstruction(
>       auxAccount.publicKey,
>       alice.publicKey,
>       alice.publicKey
>     )
>   );
> 
>   console.log(
>     `txhash: ${await sendAndConfirmTransaction(connection, tx, [
>       feePayer,
>       auxAccount,
>       alice
>     ])}`
>   );
> })();
> ```