---
title: How to Start a Local Validator
sidebar_label: How to Start a Local Validator
---

Testing your program code locally can be a lot more reliable than testing on devnet, and can help you test before trying it out on devnet.

You can setup your local-test-validator by installing the Openverse CLI tool suite and running the following command:

>openverse-test-validator

Benefits of using local-test-validator include:

- No RPC rate-limits
- No airdrop limits
- Direct onchain program deployment (--bpf-program ...)
- Clone accounts from a public cluster, including programs (--clone ...)
- Configurable transaction history retention (--limit-ledger-size ...)
- Configurable epoch length (--slots-per-epoch ...)
- Jump to an arbitrary slot (--warp-slot ...)