---
title: Connecting to a Openverse Environment
sidebar_label: Connecting to a Openverse Environment
---

When you are working on Openverse development, you will need to connect to a specific RPC API endpoint. Openverse has 3 public development environments:

- mainnet - [https://api.mainnet.openverse.network](https://api.mainnet.openverse.network)

## Connect using the network moniker

To connect to the public RPC endpoint using its "moniker" or name:

> ```bash
>import { clusterApiUrl, Connection } from "openverse-web3";
>
>const connection = new Connection(clusterApiUrl("mainnet"), "confirmed");
>```

## Connect using a specific RPC URL

To connect to a specific RPC API endpoint, either local test validator or a remote RPC provider use the following:

> ```bash
>import { Connection } from "openverse-web3";
>
>// This will connect you to your local validator
>const connection = new Connection("https://api.devnet.openverse.network", "confirmed");
>```
