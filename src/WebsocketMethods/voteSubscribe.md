---
title: voteSubscribe
sidebar_label: voteSubscribe
---
# voteSubscribe RPC Method

## 

Subscribe to receive notification anytime a new vote is observed in gossip. These votes are pre-consensus therefore there is no guarantee these votes will enter the ledger.

### params

None

### result

>`integer` subscription id (needed to unsubscribe)

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "voteSubscribe",
>}
>```

> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 0,
>  "id": 1
>}
>```

### Notification Format:

The notification will be an object with the following fields:

- `hash: <string>` - The vote hash
- `slots: <array>` - The slots covered by the vote, as an array of u64 integers
- `timestamp: <i64|null>` - The timestamp of the vote
- `signature: <string>` - The signature of the transaction that contained this vote
- `votePubkey: <string>` - The public key of the vote account, as base-58 encoded string

>```bash
>{
>  "jsonrpc": "2.0",
> "method": "voteNotification",
>  "params": {
>    "result": {
>      "hash": "8Rshv2oMkPu5E4opXTRyuyBeZBqQ4S477VG26wUTFxUM",
>      "slots": [1, 2],
>      "timestamp": null
>    },
>    "subscription": 0
>  }
>}
```