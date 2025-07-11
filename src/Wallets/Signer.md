---
title: How to Restore a Keypair or Signer
sidebar_label: How to Restore a Keypair or Signer
---

If you already have your secret key or bytes, you can get your Keypair from the secret to test out your dApp.

## From Bytes

> ```bash
>
>import { Keypair } from "openverse-web3";
>
>const keypairBytes = Uint8Array.from([
>  174, 47, 154, 16, 202, 193, 206, 113, 199, 190, 53, 133, 169, 175, 31, 56,
>  222, 53, 138, 189, 224, 216, 117, 173, 10, 149, 53, 45, 73, 251, 237, 246, 15,
>  185, 186, 82, 177, 240, 148, 69, 241, 227, 167, 80, 141, 89, 240, 121, 121,
>  35, 172, 247, 68, 251, 226, 218, 48, 63, 176, 109, 168, 89, 238, 135
>]);
>
>const keypair = Keypair.fromSecretKey(keypairBytes);
>console.log(keypair.publicKey.toString());
>```

## From Base58 String

> ```bash
>
>import { Keypair } from "openverse-web3";
>import bs58 from "bs58";
>
>const keypairBase58 =
>  "5MaiiCavjCmn9Hs1o3eznqDEhRwxo7pXiAYez7keQUviUkauRiTMD8DrESdrNjN8zd9mTmVhRvBJeg5vhyvgrAhG";
>const keypairBytes = bs58.decode(keypairBase58);
>const keypair = Keypair.fromSecretKey(keypairBytes);
>console.log(keypair.publicKey.toBase58());
>```