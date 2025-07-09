---
title: getTokenAccountsByOwner
sidebar_label: getTokenAccountsByOwner
---
# getTokenAccountsByOwner RPC Method

## 

Returns all SPL Token accounts by token owner.

### params

>`string` `required` Pubkey of account owner to query, as base-58 encoded string
>`object` `required` A JSON object with one of the following fields:


><details>
>  <summary>mint</summary>
>
>   Pubkey of the specific token Mint to limit accounts to, as base-58 encoded string
>
></details>
>
><details>
>  <summary>programId</summary>
>
>   Pubkey of the Token program that owns the accounts, as base-58 encoded string
>
></details>

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
>  <summary>minContextSlot</summary>
>
>   The minimum slot that the request can be evaluated at
>
></details>
>
><details>
>  <summary>dataSlice</summary>
>
>   Request a slice of the account's data.
>
>   - `length: <usize>` - number of bytes to return
>   - `offset: <usize>` - byte offset from which to start reading
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
>   - `base58` is slow and limited to less than 129 bytes of Account data.
>   - `base64` will return base64 encoded data for Account data of any size..
>   - `base64+zstd` compresses the Account data using Zstandard and base64-encodes the result.
>   - `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data.
>   - If `jsonParsed` is requested but a parser cannot be found, the field falls back to base64 encoding, detectable when the data field is type string.
>
></details>

### result

>`array` An array of JSON objects containing:

><details>
>  <summary>pubkey</summary>
>
>   The account Pubkey as base-58 encoded string
>
></details>
>
><details>
>  <summary>account</summary>
>
>   A JSON object containing:
>
>   - `lamports: <u64>`  - number of lamports assigned to this account, as a u64
>   - `owner: <string>` - base-58 encoded Pubkey of the program this account has been assigned to
>   - `data: <object>` - Token state data associated with the account, either as encoded binary data or in JSON format `{<program>: <state>}`
>   - `executable: <bool>` - boolean indicating if the account contains a program (and is strictly read-only)
>   - `rentEpoch: <u64>` - the epoch at which this account will next owe rent, as u64
>   - `space: <u64>` - the data size of the account
>
>   When the data is requested with the `jsonParsed` encoding a format similar to that of the Token Balances Structure can be expected inside the structure, both for the `tokenAmount` and the `delegatedAmount` - with the latter being an optional object.
>
></details>



> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getTokenAccountsByOwner",
>    "params": [
>      "A1TMhSGzQxMr1TboBKtgixKz1sS6REASMxPo1qsyTSJd",
>      {
>        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
>      },
>      {
>        "encoding": "jsonParsed"
>      }
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "context": { "apiVersion": "2.0.15", "slot": 341197933 },
>    "value": [
>      {
>        "pubkey": "BGocb4GEpbTFm8UFV2VsDSaBXHELPfAXrvd4vtt8QWrA",
>        "account": {
>          "data": {
>           "program": "spl-token",
>            "parsed": {
>              "info": {
>                "isNative": false,
>                "mint": "2cHr7QS3xfuSV8wdxo3ztuF4xbiarF6Nrgx3qpx3HzXR",
>                "owner": "A1TMhSGzQxMr1TboBKtgixKz1sS6REASMxPo1qsyTSJd",
>                "state": "initialized",
>                "tokenAmount": {
>                  "amount": "420000000000000",
>                  "decimals": 6,
>                  "uiAmount": 420000000.0,
>                  "uiAmountString": "420000000"
>                }
>              },
>              "type": "account"
>            },
>            "space": 165
>          },
>          "executable": false,
>          "lamports": 2039280,
>          "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
>          "rentEpoch": 18446744073709551615,
>          "space": 165
>        }
>      }
>    ]
>  },
>  "id": 1
>}
>```
