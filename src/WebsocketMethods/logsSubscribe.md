---
title: logsSubscribe
sidebar_label: logsSubscribe
---
# logsSubscribe RPC Method

## 

Subscribe to transaction logging

### params

>`string | object` `required` filter criteria for the logs to receive results by account type. The following filters types are currently supported:
>- `all` - subscribe to all transactions except for simple vote transactions
>- `allWithVotes` - subscribe to all transactions, including simple vote transactions
>- An object with the following field:
>  - `mentions: [ <string> ]` - array containing a single Pubkey (as base-58 encoded string); if present, subscribe to only transactions mentioning this address

>`object` `optional` Configuration object containing the following fields:
>
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>


### result

>`integer` Subscription id (needed to unsubscribe)

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "logsSubscribe",
>  "params": [
>    {
>      "mentions": ["11111111111111111111111111111111"]
>    },
>    {
>      "commitment": "finalized"
>    }
>  ]
>}
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 24040,
>  "id": 1
>}
>```

### Notification Format:

The notification will be an RpcResponse JSON object with value equal to:

- `signature: <string>` - The transaction signature base58 encoded.
- `err: <object|null>` - Error if transaction failed, null if transaction succeeded. TransactionError definitions
- `logs: <array[string]>` - Array of log messages the transaction instructions output during execution.

>**Example:**
>```bash
>{
>  "jsonrpc": "2.0",
>  "method": "logsNotification",
>  "params": {
>    "result": {
>      "context": {
>        "slot": 5208469
>      },
>      "value": {
>        "signature": "5h6xBEauJ3PK6SWCZ1PGjBvj8vDdWG3KpwATGy1ARAXFSDwt8GFXM7W5Ncn16wmqokgpiKRLuS83KUxyZyv2sUYv",
>        "err": null,
>        "logs": [
>          "SBF program 83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri success"
>        ]
>      }
>    },
>    "subscription": 24040
>  }
>}
>```
