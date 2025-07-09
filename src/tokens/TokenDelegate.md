---
title: How to Revoke a Token Delegate
sidebar_label: How to Revoke a Token Delegate
---

Revoke will set delegate to null and set delegated amount to 0.

> ```javascript
> import {
>   Connection,
>   Keypair,
>   Transaction,
>   sendAndConfirmTransaction,
>   SystemProgram,
>   LAMPORTS_PER_SOL
> } from "openverse-web3";
> import {
>   approveChecked,
>   createApproveCheckedInstruction,
>   revoke,
>   createRevokeInstruction,
>   createMint,
>   getOrCreateAssociatedTokenAccount,
>   createInitializeMintInstruction,
>   createAssociatedTokenAccountInstruction,
>   getAssociatedTokenAddress,
>   MINT_SIZE,
>   TOKEN_PROGRAM_ID
> } from "open-token-web3";
> 
> (async () => {
>   const connection = new Connection("https://api.devnet.openverse.network", "confirmed");
> 
>   const tokenOwner = Keypair.generate();
>   const airdropSignature = await connection.requestAirdrop(
>     tokenOwner.publicKey,
>     LAMPORTS_PER_SOL
>   );
>   await connection.confirmTransaction(airdropSignature);
> 
>   // Create delegate address
>   const delegate = Keypair.generate();
>   console.log(`Delegate pubkey: ${delegate.publicKey.toBase58()}`);
> 
>   // 1) Create mint using build-in function
>   console.log("\n1. Creating mint using build-in function...");
>   const mint = await createMint(
>     connection,
>     tokenOwner,
>     tokenOwner.publicKey, // mint authority
>     tokenOwner.publicKey, // freeze authority
>     9 // decimals
>   );
>   console.log(`Mint created: ${mint.toBase58()}`);
> 
>   // 2) Create mint by composing transaction
>   console.log("\n2. Creating mint by composing transaction...");
>   const mintKeypair = Keypair.generate();
>   const mintRent =
>     await connection.getMinimumBalanceForRentExemption(MINT_SIZE);
> 
>   const createMintTx = new Transaction().add(
>     // Create account for mint
>     SystemProgram.createAccount({
>       fromPubkey: tokenOwner.publicKey,
>       newAccountPubkey: mintKeypair.publicKey,
>       space: MINT_SIZE,
>       lamports: mintRent,
>       programId: TOKEN_PROGRAM_ID
>     }),
>     // Initialize mint
>     createInitializeMintInstruction(
>       mintKeypair.publicKey,
>       9, // decimals
>       tokenOwner.publicKey, // mint authority
>       tokenOwner.publicKey // freeze authority
>     )
>   );
> 
>   console.log(
>     `Create mint txhash: ${await sendAndConfirmTransaction(
>       connection,
>       createMintTx,
>       [tokenOwner, mintKeypair]
>     )}`
>   );
> 
>   // 3) Create token account using build-in function
>   console.log("\n3. Creating token account using build-in function...");
>   const tokenAccount = await getOrCreateAssociatedTokenAccount(
>     connection,
>     tokenOwner,
>     mint, // mint
>     tokenOwner.publicKey // owner
>   );
>   console.log(`Token account created: ${tokenAccount.address.toBase58()}`);
> 
>   // 4) Create token account by composing transaction
>   console.log("\n4. Creating token account by composing transaction...");
>   const associatedTokenAddress = await getAssociatedTokenAddress(
>     mintKeypair.publicKey, // mint
>     tokenOwner.publicKey // owner
>   );
> 
>   const createTokenAccountTx = new Transaction().add(
>     createAssociatedTokenAccountInstruction(
>       tokenOwner.publicKey, // payer
>       associatedTokenAddress, // token address
>       tokenOwner.publicKey, // owner
>       mintKeypair.publicKey // mint
>     )
>   );
> 
>   console.log(
>     `Create token account txhash: ${await sendAndConfirmTransaction(
>       connection,
>       createTokenAccountTx,
>       [tokenOwner]
>     )}`
>   );
> 
>   // Use the created mint and token account for delegation
>   const mintPubkey = mint;
>   const tokenAccountPubkey = tokenAccount.address;
> 
>   // 5) Approve delegation using build-in function
>   {
>     console.log("\n5. Approving delegation with specific amount...");
>     const txhash = await approveChecked(
>       connection,
>       tokenOwner,
>       mintPubkey,
>       tokenAccountPubkey,
>       delegate.publicKey,
>       tokenOwner,
>       500000000,
>       9
>     );
>     console.log(`Approve delegation txhash: ${txhash}`);
>   }
> 
>   // 6) Approve delegation by composing transaction
>   {
>     console.log("\n6. Approving delegation by composing transaction...");
>     const tx = new Transaction().add(
>       createApproveCheckedInstruction(
>         tokenAccountPubkey, // token account
>         mintPubkey, // mint
>         delegate.publicKey, // delegate
>         tokenOwner.publicKey, // owner of token account
>         500000000, // amount, if your decimals is 9, 0.5 tokens
>         9 // decimals
>       )
>     );
>     console.log(
>       `Approve delegation txhash: ${await sendAndConfirmTransaction(
>         connection,
>         tx,
>         [tokenOwner]
>       )}`
>     );
>   }
> 
>   // 7) Revoke delegation using build-in function
>   {
>     console.log("\n7. Revoking delegation...");
>     const revokeTxhash = await revoke(
>       connection,
>       tokenOwner,
>       tokenAccountPubkey,
>       tokenOwner
>     );
>     console.log(`Revoke delegation txhash: ${revokeTxhash}`);
>   }
> 
>   // 8) Revoke delegation by composing transaction
>   {
>     console.log("\n8. Revoking delegation by composing transaction...");
>     const revokeTx = new Transaction().add(
>       createRevokeInstruction(
>         tokenAccountPubkey, // token account
>         tokenOwner.publicKey // owner of token account
>       )
>     );
>     console.log(
>       `Revoke delegation txhash: ${await sendAndConfirmTransaction(
>         connection,
>         revokeTx,
>         [tokenOwner]
>       )}`
>     );
>   }
> })();
> ```