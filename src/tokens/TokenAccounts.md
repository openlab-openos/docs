---
title: How to Get a Token Account
sidebar_label: How to Get a Token Account
---

Every token account has information on the token such as the owner, mint, amount(balance).

> ```javascript
> import { clusterApiUrl, Connection, PublicKey } from "openverse-web3";
> import { getAccount } from "open-token-web3";
> 
> (async () => {
>   const connection = new Connection(
>     clusterApiUrl("https://api.devnet.openverse.network"),
>     "confirmed"
>   );
> 
>   const tokenAccountPubkey = new PublicKey(
>     "37iT6V7Y7EtnyiNcdbGVnjPRbMdzLJayKJ197jFXwpdB"
>   );
> 
>   let tokenAccount = await getAccount(connection, tokenAccountPubkey);
>   console.log(tokenAccount);
>   /*
>   {
>     address: PublicKey {
>       _bn: <BN: 16aef79dfadb39ffedb3b6f77688b8c162b18bb9cba2ffefe152303629ae3030>
>     },
>     mint: PublicKey {
>       _bn: <BN: 7351e5e067cc7cfefef42e78915d3c513edbb8adeeab4d9092e814fe68c39fec>
>     },
>     owner: PublicKey {
>       _bn: <BN: df30e6ca0981c1a677eed6f7cb46b2aa442ca9b7a10a10e494badea4b9b6944f>
>     },
>     amount: 0n,
>     delegate: null,
>     delegatedAmount: 0n,
>     isInitialized: true,
>     isFrozen: false,
>     isNative: false,
>     rentExemptReserve: null,
>     closeAuthority: null
>   }
>   */
> })();
> ```