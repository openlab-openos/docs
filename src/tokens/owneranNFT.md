---
title: How to get the owner of an NFT
sidebar_label: How to get the owner of an NFT
---

If you have the mint key of an NFT, you can find its current owner by sneak-peeking at the largest token account for that mint key.

Remember that NFTs have a supply of 1, and they are indivisible, meaning that only one token account will hold that token at any point in time, while all other token accounts for that mint key will have a balance of 0.

Once the largest token account is identified, we can retrieve its owner.

> ```javascript
> import { Connection, PublicKey } from "openverse-web3";
> 
> (async () => {
>   const connection = new Connection("https://api.devnet.solana.com");
>   const tokenMint = "4UbjQYPWJSsneHMJPD2bPZbpnAo8Zs6b99F97xBMbfXf";
> 
>   const largestAccounts = await connection.getTokenLargestAccounts(
>     new PublicKey(tokenMint)
>   );
>   const largestAccountInfo = await connection.getParsedAccountInfo(
>     largestAccounts.value[0].address
>   );
>   console.log(largestAccountInfo?.value?.data);
> 
>   const owner = largestAccountInfo?.value?.data?.parsed.info.owner;
>   console.log("NFT owner :", owner);
> })();
> ```