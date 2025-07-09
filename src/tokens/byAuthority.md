---
title: How to Get All Token Accounts by Authority
sidebar_label: How to Get All Token Accounts by Authority
---

You can fetch token accounts by owner. There are two ways to do it.

1. Get All Token Account

> ```javascript
> import { clusterApiUrl, Connection, PublicKey } from "openverse-web3";
> import { TOKEN_PROGRAM_ID } from "open-token-web3";
> 
> (async () => {
>   // connection
>   const connection = new Connection("https://api.devnet.openverse.network", "confirmed");
> 
>   const owner = new PublicKey("G2FAbFQPFa5qKXCetoFZQEvF9BVvCKbvUZvodpVidnoY");
>   let response = await connection.getParsedTokenAccountsByOwner(owner, {
>     programId: TOKEN_PROGRAM_ID
>   });
> 
>   response.value.forEach((accountInfo) => {
>     console.log(`pubkey: ${accountInfo.pubkey.toBase58()}`);
>     console.log(`mint: ${accountInfo.account.data["parsed"]["info"]["mint"]}`);
>     console.log(
>       `owner: ${accountInfo.account.data["parsed"]["info"]["owner"]}`
>     );
>     console.log(
>       `decimals: ${accountInfo.account.data["parsed"]["info"]["tokenAmount"]["decimals"]}`
>     );
>     console.log(
>       `amount: ${accountInfo.account.data["parsed"]["info"]["tokenAmount"]["amount"]}`
>     );
>     console.log("====================");
>   });
> })();
> ```

2. Filter By Mint

> ```javascript
> import { TOKEN_2022_PROGRAM_ID } from "open-token-web3";
> import { clusterApiUrl, Connection, PublicKey } from "openverse-web3";
> 
> (async () => {
>   // connection
>   const connection = new Connection(
>     clusterApiUrl("https://api.devnet.openverse.network"),
>     "confirmed"
>   );
> 
>   const owner = new PublicKey("G2FAbFQPFa5qKXCetoFZQEvF9BVvCKbvUZvodpVidnoY");
>   const mint = new PublicKey("54dQ8cfHsW1YfKYpmdVZhWpb9iSi6Pac82Nf7sg3bVb");
> 
>   let response = await connection.getParsedTokenAccountsByOwner(owner, {
>     mint: mint,
>     programId: TOKEN_2022_PROGRAM_ID
>   });
> 
>   response.value.forEach((accountInfo) => {
>     console.log(`pubkey: ${accountInfo.pubkey.toBase58()}`);
>     console.log(`mint: ${accountInfo.account.data["parsed"]["info"]["mint"]}`);
>     console.log(
>       `owner: ${accountInfo.account.data["parsed"]["info"]["owner"]}`
>     );
>     console.log(
>       `decimals: ${accountInfo.account.data["parsed"]["info"]["tokenAmount"]["decimals"]}`
>     );
>     console.log(
>       `amount: ${accountInfo.account.data["parsed"]["info"]["tokenAmount"]["amount"]}`
>     );
>     console.log("====================");
>   });
> })();
> ```