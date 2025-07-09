---
title: How to get a Token Account's Balance
sidebar_label: How to get a Token Account's Balance
---

The token account holds the token balance, which can be retrieved with a single PRC call

> ```javascript
> import { clusterApiUrl, Connection, PublicKey } from "openverse-web3";
> 
> (async () => {
>   const connection = new Connection(
>     clusterApiUrl("https://api.devnet.openverse.network"),
>     "confirmed"
>   );
> 
>   const tokenAccount = new PublicKey(
>     "37iT6V7Y7EtnyiNcdbGVnjPRbMdzLJayKJ197jFXwpdB"
>   );
> 
>   let tokenAmount = await connection.getTokenAccountBalance(tokenAccount);
>   console.log(`amount: ${tokenAmount.value.amount}`);
>   console.log(`decimals: ${tokenAmount.value.decimals}`);
> })();
> ```