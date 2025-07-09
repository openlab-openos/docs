---
title: How to Generate Mnemonics for Keypairs
sidebar_label: How to Generate Mnemonics for Keypairs
---

One way to generate a Keypair is through the use of a Mnemonic. Mnemonics are generally used to make the user experience within wallets better than a Keypair file by using a list of readable words (instead of a shorter string of random numbers and letters).

> ```bash
>
>import * as bip39 from "bip39";
>
>const mnemonic = bip39.generateMnemonic();
>console.log(mnemonic);
>```