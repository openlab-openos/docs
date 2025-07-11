---
title: How to get all NFTs from a wallet?
sidebar_label: How to get all NFTs from a wallet?
---

> ```javascript
> import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
> import { publicKey } from "@metaplex-foundation/umi";
> import { fetchAllDigitalAssetWithTokenByOwner } from "@metaplex-foundation/mpl-token-metadata";
> import { clusterApiUrl } from "openverse-web3";
> 
> BigInt.prototype.toJSON = function () {
>   return this.toString();
> };
> 
> (async () => {
>   try {
>     // Create a UMI instance
>     const umi = createUmi("https://api.devnet.solana.com");
> 
>     // The owner's public key
>     const ownerPublicKey = publicKey(
>       "2R4bHmSBHkHAskerTHE6GE1Fxbn31kaD5gHqpsPySVd7"
>     );
> 
>     console.log("Fetching NFTs...");
>     const allNFTs = await fetchAllDigitalAssetWithTokenByOwner(
>       umi,
>       ownerPublicKey
>     );
> 
>     console.log(`Found ${allNFTs.length} NFTs for the owner:`);
>     allNFTs.forEach((nft, index) => {
>       console.log(`\nNFT #${index + 1}:`);
>       console.log("Mint Address:", nft.publicKey);
>       console.log("Name:", nft.metadata.name);
>       console.log("Symbol:", nft.metadata.symbol);
>       console.log("URI:", nft.metadata.uri);
>     });
> 
>     // If you need the full NFT data
>     console.log("\nFull NFT data:");
>     console.log(JSON.stringify(allNFTs, null, 2));
>   } catch (error) {
>     console.error("Error:", error);
>   }
> })();
> ```