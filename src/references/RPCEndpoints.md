---
title: RPC Endpoints
sidebar_label: RPC Endpoints
---
# Clusters and Public RPC Endpoints

The Openverse blockchain has several different groups of validators, known as Clusters. Each serving different purposes within the overall ecosystem and containing dedicated API nodes to fulfill JSON-RPC requests for their respective Cluster.

The individual nodes within a Cluster are owned and operated by third parties, with a public endpoint available for each.

## Openverse public RPC endpoints

The Openverse Labs organization operates a public RPC endpoint for each Cluster. Each of these public endpoints are subject to rate limits, but are available for users and developers to interact with the Openverse blockchain.

> **"Public endpoint rate limits are subject to change. The specific rate limits listed on this document are not guaranteed to be the most up-to-date."**

## Using explorers with different Clusters

Many of the popular Openverse blockchain explorers support selecting any of the Clusters, often allowing advanced users to add a custom/private RPC endpoint as well.

An example of some of these Openverse blockchain explorers include:

- [Openverse Live](https://openverse.live/)

## On a high level

- Mainnet: Live production environment for deployed applications.
- Devnet: Testing with public accessibility for developers experimenting with their applications.
- Testnet: Stress-testing for network upgrades and validator performance.

**Example** use cases: You may want to debug a new program on Devnet or verify performance metrics on Testnet before Mainnet deployment.

| Cluster  |      Endpoint       | Purpose | Notes |
| :-: | :-----------------: | :------------: | :---------------------: |
|  Mainnet  | https://api.mainnet.openverse.network |      Live production environment      |           Requires BTG for transactions           |
|  Devnet  |        https://api.devnet.openverse.network        |      	Public testing and development      |     Free BTG airdrop for testing     |

## Devnet

Devnet serves as a playground for anyone who wants to take Openverse for a test drive, as a user, token holder, app developer, or validator.

- Application developers should target Devnet.
- Potential validators should first target Devnet.
- Key differences between Devnet and Mainnet Beta:
  - Devnet tokens are not real
  - Devnet includes a token faucet for airdrops for application testing
  - Devnet may be subject to ledger resets
  - Devnet typically runs the same software release branch version as Mainnet Beta, but may run a newer minor release version than Mainnet Beta.

## Devnet endpoint

- `https://api.devnet.openverse.network` - single Openverse Labs hosted API node; rate-limited

## Example `openverse` command-line configuration

To connect to the `devnet` Cluster using the Openverse CLI:

>openos config set --url https://api.devnet.openverse.network

## Devnet rate limits

- Maximum number of requests per 10 seconds per IP: 100
- Maximum number of requests per 10 seconds per IP for a single RPC: 40
- Maximum concurrent connections per IP: 40
- Maximum connection rate per 10 seconds per IP: 40
- Maximum amount of data per 30 second: 100 MB


## Mainnet Beta

A permissionless, persistent cluster for Openverse users, builders, validators and token holders.

- Tokens that are issued on Mainnet Beta are real SOL

## Mainnet beta endpoint

- `https://api.mainnet.openverse.network` - Openverse Labs hosted API node cluster, backed by a load balancer; rate-limited

## Example `openverse` command-line configuration

To connect to the `mainnet` Cluster using the Openverse CLI:

>openos config set --url https://api.mainnet.openverse.network

## Mainnet beta rate limits

- Maximum number of requests per 10 seconds per IP: 100
- Maximum number of requests per 10 seconds per IP for a single RPC: 40
- Maximum concurrent connections per IP: 40
- Maximum connection rate per 10 seconds per IP: 40
- Maximum amount of data per 30 second: 100 MB

> "*The public RPC endpoints are not intended for production applications. Please use dedicated/private RPC servers when you launch your application, drop NFTs, etc. The public services are subject to abuse and rate limits may change without prior notice. Likewise, high-traffic websites may be blocked without prior notice.*"

## Common HTTP Error Codes

- 403 -- Your IP address or website has been blocked. It is time to run your own RPC server(s) or find a private service.

- 429 -- Your IP address is exceeding the rate limits. Slow down! Use the Retry-After HTTP response header to determine how long to wait before making another request.