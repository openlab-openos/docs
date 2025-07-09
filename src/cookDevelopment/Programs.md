---
title: Using Mainnet Accounts and Programs
sidebar_label: Using Mainnet Accounts and Programs
---

Oftentimes, local tests rely on programs and accounts that are not available on the local validator by default.
The Openverse CLI allows to both:

- Download Programs and Accounts
- Load Programs and Accounts to a local validator

## How to load accounts from mainnet

It is possible to download the JUP token mint account to file:

> ```bash
>
># openverse account -u <source cluster> --output <output format> --output-file <destination file name/path> <address of account to fetch>
>openverse account -u m --output json-compact --output-file jup.json JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN
>```

Loading it to your localnet is then done by passing the account's file and destination address (on the local cluster) when starting the validator:

> ```bash
>
># openverse-test-validator --account <address to load the account to> <path to account file> --reset
>openverse-test-validator --account JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN jup.json --reset
>```

Similarly, it is possible to download the Openbook program:

> ```bash
>
># openverse program dump -u <source cluster> <address of account to fetch> <destination file name/path>
>openverse program dump -u m srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX openbook.so
>```

Loading it to your localnet is then done by passing the program's file and destination address (on the local cluster) when starting the validator:

> ```bash
>
># openverse-test-validator --bpf-program <address to load the program to> <path to program file> --reset
>openverse-test-validator --bpf-program srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX openbook.so --reset
>```
