---
title: How to create an NFT
sidebar_label: How to create an NFT
---

To create an NFT you have to:

- Upload the image to IPFS like Arweave
- Upload the JSON metadata to Arweave or similar storage service.
- Call metaplex to create an account for the NFT

## Upload to Arweave

> ```javascript
> import fs from "node:fs";
> import Arweave from "arweave";
> 
> (async () => {
>   const arweave = Arweave.init({
>     host: "localhost",
>     port: 1984,
>     protocol: "http",
>     timeout: 20000,
>     logging: false
>   });
> 
>   const host = arweave.getConfig().api.host;
>   const port = arweave.getConfig().api.port;
>   const protocol = arweave.getConfig().api.protocol;
> 
>   // Upload image to Arweave
>   const data = fs.readFileSync("./code/nfts/upload-arweave/lowres-dog.png");
> 
>   const transaction = await arweave.createTransaction({
>     data: data
>   });
> 
>   transaction.addTag("Content-Type", "image/png");
> 
>   // Instead of generating a new wallet, you can use an existing one from your file system
>   // useful in production environments
>   // const wallet = JSON.parse(fs.readFileSync("./code/nfts/upload-arweave/wallet.json", "utf-8"))
>   const wallet = await arweave.wallets.generate();
>   const address = await arweave.wallets.getAddress(wallet);
>   console.log("address:", address);
> 
>   await arweave.api.get(`/mint/${encodeURI(addr)}/10000000000000000`);
>   await arweave.transactions.sign(transaction, wallet);
> 
>   const response = await arweave.transactions.post(transaction);
>   console.log(response);
> 
>   const id = transaction.id;
>   const imageUrl = id ? `${protocol}://${host}:${port}/${id}` : null;
>   console.log("imageUrl", imageUrl);
> 
>   // Upload metadata to Arweave
> 
>   const metadata = {
>     name: "Custom NFT #1",
>     symbol: "CNFT",
>     description: "A description about my custom NFT #1",
>     seller_fee_basis_points: 500,
>     external_url: "https://www.customnft.com/",
>     attributes: [
>       {
>         trait_type: "NFT type",
>         value: "Custom"
>       }
>     ],
>     collection: {
>       name: "Test Collection",
>       family: "Custom NFTs"
>     },
>     properties: {
>       files: [
>         {
>           uri: imageUrl,
>           type: "image/png"
>         }
>       ],
>       category: "image",
>       maxSupply: 0,
>       creators: [
>         {
>           address: "CBBUMHRmbVUck99mTCip5sHP16kzGj3QTYB8K3XxwmQx",
>           share: 100
>         }
>       ]
>     },
>     image: imageUrl
>   };
> 
>   const metadataString = JSON.stringify(metadata);
> 
>   const metadataTransaction = await arweave.createTransaction({
>     data: metadataString
>   });
> 
>   metadataTransaction.addTag("Content-Type", "application/json");
> 
>   await arweave.transactions.sign(metadataTransaction, wallet);
> 
>   console.log("metadata txid", metadataTransaction.id);
> 
>   const txnResult = await arweave.transactions.post(metadataTransaction);
> 
>   console.log(txnResult);
> })();
> ```

## Mint the NFT

> ```javascript
> import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
> import {
>   generateSigner,
>   percentAmount,
>   keypairIdentity,
>   createAmount
> } from "@metaplex-foundation/umi";
> import {
>   createNft,
>   fetchDigitalAsset,
>   mplTokenMetadata
> } from "@metaplex-foundation/mpl-token-metadata";
> import bs58 from "bs58";
> 
> (async () => {
>   try {
>     console.log("Creating Umi instance...");
>     const umi = createUmi("https://api.devnet.openverse.network");
> 
>     const keypair = umi.eddsa.createKeypairFromSecretKey(
>       bs58.decode(
>         "588FU4PktJWfGfxtzpAAXywSNt74AvtroVzGfKkVN1LwRuvHwKGr851uH8czM5qm4iqLbs1kKoMKtMJG4ATR7Ld2"
>       )
>     );
> 
>     await umi.rpc.airdrop(keypair.publicKey, createAmount(1, "SOL", 9));
> 
>     // Use keypairIdentity to set the keypair as the signer
>     const signer = keypairIdentity(keypair);
>     umi.use(signer);
>     umi.use(mplTokenMetadata());
> 
>     console.log("Keypair loaded. Public key:", keypair.publicKey);
> 
>     console.log("Generating new mint address...");
>     const mint = generateSigner(umi);
> 
>     console.log("Creating NFT...");
>     const { signature } = await createNft(umi, {
>       mint,
>       name: "My NFT",
>       // Replace this with your Arweave metadata URI
>       uri: "https://ffaaqinzhkt4ukhbohixfliubnvpjgyedi3f2iccrq4efh3s.arweave.net/KUAIIbk6p8oo4XHRcq0U__C2r0mwQaNl0gQow4Qp9yk",
>       sellerFeeBasisPoints: percentAmount(0),
>       creators: [
>         {
>           address: keypair.publicKey,
>           share: 100,
>           verified: true
>         }
>       ]
>     }).sendAndConfirm(umi);
> 
>     console.log("NFT created successfully!");
>     console.log("Mint address:", mint.publicKey);
>     console.log("Transaction signature:", signature);
> 
>     console.log("Fetching digital asset...");
>     const asset = await fetchDigitalAsset(umi, mint.publicKey);
>     console.log("Digital Asset:", asset);
>   } catch (error) {
>     console.error("Error:", error);
>     console.error("Stack trace:", error.stack);
>   }
> })();
> ```