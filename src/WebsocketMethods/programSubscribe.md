---
title: programSubscribe
sidebar_label: programSubscribe
---
# programSubscribe RPC Method

## 

Subscribe to a program to receive notifications when the lamports or data for an account owned by the given program changes

### params

>`string` `required` Pubkey of the program_id, as base-58 encoded string

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
>  <summary>filters</summary>
>
>   Filter results using various filter objects. See Filtering.
>
></details>
>
><details>
>  <summary>encoding</summary>
>
>   Values: `base58` `base64` `base64+zstd` `jsonParsed`
>   
>   Default
>
>   Encoding format for Account data
>
>   - `base58` is slow.
>   - `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data.
>   - If `jsonParsed` is requested but a parser cannot be found, the field falls back to `base64` encoding, detectable when the `data` field is type `string`.
>
></details>

### result

>`integer` Subscription id (needed to unsubscribe)

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "programSubscribe",
>  "params": [
>    "11111111111111111111111111111111",
>    {
>      "encoding": "base64",
>      "filters": [{ "dataSize": 80 }]
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

The notification format is a single program account object as seen in the getProgramAccounts RPC HTTP method.

>**Base58 encoding:**
>```bash
>{
>  "jsonrpc": "2.0",
>  "method": "programNotification",
>  "params": {
>    "result": {
>      "context": {
>        "slot": 5208469
>      },
>      "value": {
>        "pubkey": "H4vnBqifaSACnKa7acsxstsY1iV1bvJNxsCY7enrd1hq",
>        "account": {
>          "data": [
>            "11116bv5nS2h3y12kD1yUKeMZvGcKLSjQgX6BeV7u1FrjeJcKfsHPXHRDEHrBesJhZyqnnq9qJeUuF7WHxiuLuL5twc38w2TXNLxnDbjmuR",
>            "base58"
>          ],
>          "executable": false,
>          "lamports": 33594,
>          "owner": "11111111111111111111111111111111",
>          "rentEpoch": 636,
>         "space": 80
>        }
>      }
>    },
>    "subscription": 24040
>  }
>}
>```

>**Parsed-JSON encoding:**
>```bash
>{
>  "jsonrpc": "2.0",
> "method": "programNotification",
>  "params": {
>    "result": {
>      "context": {
>        "slot": 5208469
>      },
>      "value": {
>        "pubkey": "H4vnBqifaSACnKa7acsxstsY1iV1bvJNxsCY7enrd1hq",
>       "account": {
>         "data": {
>            "program": "nonce",
>            "parsed": {
>             "type": "initialized",
>              "info": {
>                "authority": "Bbqg1M4YVVfbhEzwA9SpC9FhsaG83YMTYoR4a8oTDLX",
>                "blockhash": "LUaQTmM7WbMRiATdMMHaRGakPtCkc2GHtH57STKXs6k",
>                "feeCalculator": {
>                 "lamportsPerSignature": 5000
>               }
>             }
>            }
>          },
>         "executable": false,
>          "lamports": 33594,
>          "owner": "11111111111111111111111111111111",
>          "rentEpoch": 636,
>          "space": 80
>       }
>     }
>    },
>    "subscription": 24040
>  }
>}
>```
