---
title: How to Create a Keypair
sidebar_label: How to Create a Keypair
---

Any transaction on the Openverse blockchain requires a vaid signature from the signing keypair or wallet. If you are connecting to a wallet, you do not need to worry about the keypair. Otherwise a keypair must be generated for signing transactions.

> ```bash
>
>import { Keypair } from "openverse-web3";
>
>const keypair = Keypair.generate();
>console.log("address:", keypair.publicKey.toBase58());
>```