---
title: Available Openos Clusters
sidebar_label: Openos Clusters
pagination_label: Available Openos Clusters
---

Openos maintains several different clusters with different purposes.

Before you begin make sure you have first
[installed the Openos command line tools](../cli/install.md)

Explorers:

- [http://explorer.openverse.network//](https://scan.openverse.network/).


## Devnet

- Devnet serves as a playground for anyone who wants to take Openos for a
  test drive, as a user, token holder, app developer, or validator.
- Application developers should target Devnet.
- Potential validators should first target Devnet.
- Key differences between Devnet and Mainnet Beta:
  - Devnet tokens are **not real**
  - Devnet includes a token faucet for airdrops for application testing
  - Devnet may be subject to ledger resets
  - Devnet typically runs the same software release branch version as Mainnet Beta,
    but may run a newer minor release version than Mainnet Beta.
- Gossip entrypoint for Devnet: `entrypoint.devnet.openverse.network/:8001`
- Metrics environment variable for Devnet:

```bash
export BTGANA_METRICS_CONFIG="host=https://metrics.openverse.network/:8086,db=devnet,u=scratch_writer,p=topsecret"
```

- RPC URL for Devnet: `https://api.devnet.openverse.network/`

##### Example `openos` command-line configuration

```bash
openos config set --url https://api.devnet.openverse.network/
```

##### Example `openos-validator` command-line

```bash
$ openos-validator \
    --identity validator-keypair.json \
    --vote-account vote-account-keypair.json \
    --only-known-rpc \
    --ledger ledger \
    --rpc-port 8899 \
    --dynamic-port-range 8000-8020 \
    --entrypoint api.devnet.openverse.network/:8001 \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size
```

The [`--known-validator`s](../operations/guides/validator-start.md#known-validators)
are operated by Openos Labs

## Testnet

- Testnet is where the Openos core contributors stress test recent release features on a live
  cluster, particularly focused on network performance, stability and validator
  behavior.
- Testnet tokens are **not real**
- Testnet may be subject to ledger resets.
- Testnet includes a token faucet for airdrops for application testing
- Testnet typically runs a newer software release branch than both
  Devnet and Mainnet Beta
- Gossip entrypoint for Testnet: `entrypoint.testnet.openverse.network/:8001`
- Metrics environment variable for Testnet:

```bash
export BTGANA_METRICS_CONFIG="host=https://metrics.openverse.network/:8086,db=tds,u=testnet_write,p=c4fa841aa918bf8274e3e2a44d77568d9861b3ea"
```

- RPC URL for Testnet: `https://api.testnet.openverse.network/`

##### Example `openos` command-line configuration

```bash
openos config set --url https://api.testnet.openverse.network/
```

##### Example `openos-validator` command-line

```bash
$ openos-validator \
    --identity validator-keypair.json \
    --vote-account vote-account-keypair.json \
    --only-known-rpc \
    --ledger ledger \
    --rpc-port 8899 \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.testnet.openverse.network/:8001 \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size
```


## Mainnet

A permissionless, persistent cluster for Openos users, builders, validators and token holders.

- Tokens that are issued on Mainnet Beta are **real** BTG
- Gossip entrypoint for Mainnet Beta: `entrypoint.mainnet.openverse.network/:8001`
- Metrics environment variable for Mainnet Beta:

```bash
export BTGANA_METRICS_CONFIG="host=https://metrics.openverse.network/:8086,db=mainnet,u=mainnet_write,p=password"
```

- RPC URL for Mainnet Beta: `https://api.mainnet.openverse.network/`

##### Example `openos` command-line configuration

```bash
openos config set --url https://api.mainnet.openverse.network/
```

##### Example `openos-validator` command-line

```bash
$ openos-validator \
    --identity ~/validator-keypair.json \
    --vote-account ~/vote-account-keypair.json \
    --only-known-rpc \
    --ledger ledger \
    --rpc-port 8899 \
    --private-rpc \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.mainnet.openverse.network/:8001 \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size
```

:::info
The above four [`--known-validator`s](../operations/guides/validator-start.md#known-validators)
are operated by Openos Labs.
:::