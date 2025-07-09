---
title: How to Validate a Public Key
sidebar_label: How to Validate a Public Key
---

In certain special cases (e.g. a Program Derived Address), public keys may not have a private key associated with them. You can check this by looking to see if the public key lies on the ed25519 curve. Only public keys that lie on the curve can be controlled by users with wallets.

> ```bash
>
>import { PublicKey } from "openverse-web3";
>
>// Note that Keypair.generate() will always give a public key that is valid for users
>
>// Valid public key
>const key = new PublicKey("5oNDL3swdJJF1g9DzJiZ4ynHXgszjAEpUkxVYejchzrY");
>
>// Lies on the ed25519 curve and is suitable for users
>console.log(PublicKey.isOnCurve(key.toBytes()));
>
>// Valid public key
>const offCurveAddress = new PublicKey(
>  "4BJXYkfvg37zEmBbsacZjeQDpTNx91KppxFJxRqrz48e"
>);
>
>// Not on the ed25519 curve, therefore not suitable for users
>console.log(PublicKey.isOnCurve(offCurveAddress.toBytes()));
>
>// Not a valid public key, therefore it throws an error
>try {
>  new PublicKey("testPubkey");
>} catch (e) {
>  console.log("error parsing pubkey:", e.message);
>}
>```