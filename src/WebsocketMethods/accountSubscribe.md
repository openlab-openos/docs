---
title: accountSubscribe
sidebar_label: accountSubscribe
---
# accountSubscribe RPC Method

## 

Subscribe to an account to receive notifications when the lamports or data for a given account public key changes

### params

>`string` `required` Account Pubkey, as base-58 encoded string

>`object` `optional` Configuration object containing the following fields:
>
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>
>
><details>
>  <summary>encoding</summary>
>
>   - Values: `base58` `base64` `base64+zstd` `jsonParsed`
>   - Default: 
>
>   Encoding format for Account data
>   - `base58` is slow.
>   - `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data
>   - If `jsonParsed` is requested but a parser cannot be found, the field falls back to binary encoding, detectable when the `data` field is type `string`.
>
></details>


### result

>`number` Subscription id (needed to unsubscribe)

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "accountSubscribe",
>  "params": [
>    "CM78CPUeXjn8o3yroDHxUtKsZZgoy4GPkPPXfouKNH12",
>    {
>      "encoding": "jsonParsed",
>      "commitment": "finalized"
>    }
>  ]
>}
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 23784,
>  "id": 1
>}
>```

### Notification Format:

The notification format is the same as seen in the getAccountInfo RPC HTTP method.

>****Base58 encoding:**
>```bash
>{
>  "jsonrpc": "2.0",
> "method": "accountNotification",
>  "params": {
>    "result": {
>      "context": {
>        "slot": 5199307
>      },
>      "value": {
>        "data": [
>          "11116bv5nS2h3y12kD1yUKeMZvGcKLSjQgX6BeV7u1FrjeJcKfsHPXHRDEHrBesJhZyqnnq9qJeUuF7WHxiuLuL5twc38w2TXNLxnDbjmuR",
>          "base58"
>        ],
>        "executable": false,
>        "lamports": 33594,
>        "owner": "11111111111111111111111111111111",
>        "rentEpoch": 635,
>        "space": 80
>      }
>    },
>    "subscription": 23784
>  }
>}
>```

>****Base58 encoding:**
>```bash
>{
>  "jsonrpc": "2.0",
> "method": "accountNotification",
 > "params": {
>    "result": {
>      "context": {
>        "slot": 5199307
>      },
>      "value": {
>        "data": {
>          "program": "nonce",
>          "parsed": {
>            "type": "initialized",
>            "info": {
>             "authority": "Bbqg1M4YVVfbhEzwA9SpC9FhsaG83YMTYoR4a8oTDLX",
>              "blockhash": "LUaQTmM7WbMRiATdMMHaRGakPtCkc2GHtH57STKXs6k",
>              "feeCalculator": {
>                "lamportsPerSignature": 5000
>              }
>           }
>          }
>        },
>        "executable": false,
>        "lamports": 33594,
>        "owner": "11111111111111111111111111111111",
>        "rentEpoch": 635,
>        "space": 80
>      }
>    },
>    "subscription": 23784
>  }
>}
>```