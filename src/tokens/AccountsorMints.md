---
title: How to Set Authority on Token Accounts or Mints
sidebar_label: How to Set Authority on Token Accounts or Mints
---

You can set/update authority. There are 4 types:

- MintTokens (mint account)
- FreezeAccount (mint account)
- AccountOwner (token account)
- CloseAccount (token account)

> ```javascript
> import { Connection, Keypair, LAMPORTS_PER_SOL } from "openverse-web3";
> import {
>   AuthorityType,
>   setAuthority,
>   createMint,
>   getOrCreateAssociatedTokenAccount
> } from "open-token-web3";
> 
> (async () => {
>   const connection = new Connection("https://api.devnet.openverse.network", "confirmed");
> 
>   // Setup fee payer
>   const feePayer = Keypair.generate();
> 
>   const airdropSignature = await connection.requestAirdrop(
>     feePayer.publicKey,
>     LAMPORTS_PER_SOL
>   );
>   await connection.confirmTransaction(airdropSignature);
> 
>   // Create a new random authority
>   const newAuthority = Keypair.generate();
>   console.log(`New Authority Public Key: ${newAuthority.publicKey.toBase58()}`);
> 
>   // Create a new mint
>   console.log("Creating new mint...");
>   const mint = await createMint(
>     connection,
>     feePayer,
>     feePayer.publicKey,
>     feePayer.publicKey,
>     9
>   );
>   console.log(`Mint created: ${mint.toBase58()}`);
> 
>   // Create token account
>   console.log("Creating token account...");
>   const tokenAccount = await getOrCreateAssociatedTokenAccount(
>     connection,
>     feePayer,
>     mint,
>     feePayer.publicKey
>   );
>   console.log(`Token account created: ${tokenAccount.address.toBase58()}`);
> 
>   // 1. Change Mint Authority (MintTokens)
>   console.log("\n1. Changing Mint Authority...");
>   const mintAuthTx = await setAuthority(
>     connection,
>     feePayer,
>     mint,
>     feePayer,
>     AuthorityType.MintTokens,
>     newAuthority.publicKey // Set to null to permanently disable minting
>   );
>   console.log(`Mint authority changed. Tx: ${mintAuthTx}`);
> 
>   // 2. Change Freeze Authority
>   console.log("\n2. Changing Freeze Authority...");
>   const freezeAuthTx = await setAuthority(
>     connection,
>     feePayer,
>     mint,
>     feePayer,
>     AuthorityType.FreezeAccount,
>     newAuthority.publicKey // Set to null to permanently disable freezing
>   );
>   console.log(`Freeze authority changed. Tx: ${freezeAuthTx}`);
> 
>   // Example of revoking authority (setting to null)
>   console.log("\n3. Revoking Mint Authority...");
>   const revokeMintAuthTx = await setAuthority(
>     connection,
>     feePayer,
>     mint,
>     newAuthority, // must be signed by current authority
>     AuthorityType.MintTokens,
>     null // Setting to null revokes the authority
>   );
>   console.log(`Mint authority revoked. Tx: ${revokeMintAuthTx}`);
> })();
> ```