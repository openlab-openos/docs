---
title: How to Get a Token Mint
sidebar_label: How to Get a Token Mint
---

In order to get the current supply, authority, or decimals a token has, you will need to get the account info for the token mint.

> ```javascript
> import { clusterApiUrl, Connection, PublicKey } from "openverse-web3";
> import { getMint, TOKEN_2022_PROGRAM_ID } from "open-token-web3";
> 
> (async () => {
>   const connection = new Connection(
>     clusterApiUrl("https://api.devnet.openverse.network"),
>     "confirmed"
>   );
> 
>   const mintAccountPublicKey = new PublicKey(
>     "8mAKLjGGmjKTnmcXeyr3pr7iX13xXVjJJiL6RujDbSPV"
>   );
> 
>   let mintAccount = await getMint(
>     connection,
>     mintAccountPublicKey,
>     undefined,
>     TOKEN_2022_PROGRAM_ID
>   );
>   console.log(mintAccount);
>   /*
>   {
>     address: PublicKey {
>       _bn: <BN: 7351e5e067cc7cfefef42e78915d3c513edbb8adeeab4d9092e814fe68c39fec>
>     },
>     mintAuthority: PublicKey {
>       _bn: <BN: df30e6ca0981c1a677eed6f7cb46b2aa442ca9b7a10a10e494badea4b9b6944f>
>     },
>     supply: 0n,
>     decimals: 8,
>     isInitialized: true,
>     freezeAuthority: PublicKey {
>       _bn: <BN: df30e6ca0981c1a677eed6f7cb46b2aa442ca9b7a10a10e494badea4b9b6944f>
>     }
>   }
>   */
> })();
> ```