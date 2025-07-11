---
title: How to Restore a Keypair from a Mnemonic
sidebar_label: How to Restore a Keypair from a Mnemonic
---

Many wallet extensions use mnemonics to represent their secret keys. You can convert the mnemonic to Keypairs for local testing.

## Restoring BIP39 format mnemonics

> ```bash
>
>import { Keypair } from "openverse-web3";
>import * as bip39 from "bip39";
>
>const mnemonic =
>  "pill tomorrow foster begin walnut borrow virtual kick shift mutual shoe scatter";
>
>// arguments: (mnemonic, password)
>const seed = bip39.mnemonicToSeedSync(mnemonic, "");
>const keypair = Keypair.fromSeed(seed.slice(0, 32));
>
>console.log(`${keypair.publicKey.toBase58()}`);
>
>// output: 5ZWj7a1f8tWkjBESHKgrLmXshuXxqeY9SYcfbshpAqPG
>```

## Restoring BIP44 format mnemonics

> ```bash
>
>import { Keypair } from "openverse-web3";
>import { HDKey } from "micro-ed25519-hdkey";
>import * as bip39 from "bip39";
>
>const mnemonic =
>  "neither lonely flavor argue grass remind eye tag avocado spot unusual intact";
>
>// arguments: (mnemonic, password)
>const seed = bip39.mnemonicToSeedSync(mnemonic, "");
>const hd = HDKey.fromMasterSeed(seed.toString("hex"));
>
>for (let i = 0; i < 10; i++) {
>  const path = `m/44'/501'/${i}'/0'`;
>  const keypair = Keypair.fromSeed(hd.derive(path).privateKey);
>  console.log(`${path} => ${keypair.publicKey.toBase58()}`);
>}
>```