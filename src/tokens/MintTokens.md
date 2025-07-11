---
title: How to Mint Tokens
sidebar_label: How to Mint Tokens
---

When you mint tokens, you increase the supply and transfer the new tokens to a specific token account.

> ```javascript
> import { clusterApiUrl, Connection, PublicKey, Keypair } from "openverse-web3";
> import {
>   createAssociatedTokenAccountIdempotent,
>   mintToChecked,
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
> 
>   // G2FAbFQPFa5qKXCetoFZQEvF9BVvCKbvUZvodpVidnoY
>   const alice = Keypair.fromSecretKey(
>     bs58.decode(
>       "4NMwxzmYj2uvHuq8xoqhY8RXg63KSVJM1DXkpbmkUY7YQWuoyQgFnnzn6yo3CMnqZasnNPNuAT2TLwQsCaKkUddp"
>     )
>   );
>   const airdropSig = await connection.requestAirdrop(
>     feePayer.publicKey,
>     1000000000
>   );
>   await connection.confirmTransaction(airdropSig);
> 
>   const mintPubkey = new PublicKey(
>     "8mAKLjGGmjKTnmcXeyr3pr7iX13xXVjJJiL6RujDbSPV"
>   );
> 
>   let tokenAccountPubkey = await createAssociatedTokenAccountIdempotent(
>     connection, // connection
>     feePayer, // fee payer
>     mintPubkey, // mint
>     feePayer.publicKey, // owner
>     undefined,
>     TOKEN_2022_PROGRAM_ID
>   );
>   console.log(`ATA: ${tokenAccountPubkey.toBase58()}`);
> 
>   {
>     let txhash = await mintToChecked(
>       connection, // connection
>       feePayer, // fee payer
>       mintPubkey, // mint
>       tokenAccountPubkey, // receiver (should be a token account)
>       feePayer, // mint authority
>       1e9, // amount. if your decimals are 2, you mint 10^2 for 1 token.
>       9, // decimals
>       undefined,
>       undefined,
>       TOKEN_2022_PROGRAM_ID
>     );
>     console.log(`txhash: ${txhash}`);
> 
>     // if alice is a multisig account
>     // let txhash = await mintToChecked(
>     //   connection, // connection
>     //   feePayer, // fee payer
>     //   mintPubkey, // mint
>     //   tokenAccountPubkey, // receiver (should be a token account)
>     //   alice.publicKey, // !! mint authority pubkey !!
>     //   1e8, // amount. if your decimals are 8, you mint 10^8 for 1 token.
>     //   8, // decimals
>     //   [signer1, signer2 ...],
>     // );
>   }
> })();
> ```