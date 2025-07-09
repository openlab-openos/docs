---
title: getMultipleAccounts
sidebar_label: getMultipleAccounts
---
# getMultipleAccounts RPC Method

## 

Returns the account information for a list of Pubkeys.

### params

>`array` `required` An array of Pubkeys to query, as base-58 encoded strings (up to a maximum of 100)

>`object` `optional` Configuration object containing the following fields:
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>

><details>
>  <summary>minContextSlot</summary>
>
>   The minimum slot that the request can be evaluated at
>
></details>

><details>
>  <summary>dataSlice</summary>
>
>   Request a slice of the account's data.
>
>   - `length: <usize>` - number of bytes to return
>   - `offset: <usize>` - byte offset from which to start reading
>
></details>

><details>
>  <summary>encoding</summary>
>
>   Values: `base58` `jsonParsed` `base64` `base64+zstd`
>   Default: `base64`
>   Encoding format for the returned Account data
>
>   - `base58` is slow and limited to less than 129 bytes of Account data.
>   - `base64` will return base64 encoded data for Account data of any size.
>   - `base64+zstd` compresses the Account data using Zstandard and base64-encodes the result.
>   - `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data.
>   - If `jsonParsed` is requested but a parser cannot be found, the field falls back to `base64` encoding, detectable when the data field is type `<string>`.
>
></details>




### result

>`array` The result will be an array containing either:
>- `null`  - if the account at that Pubkey doesn't exist, or
>- Account objects with the following fields:

><details>
>  <summary>lamports</summary>
>
>   Number of lamports assigned to this account
>
></details>

><details>
>  <summary>owner</summary>
>
>   Base-58 encoded Pubkey of the program this account has been assigned to
>
></details>

><details>
>  <summary>data</summary>
>
>   Data associated with the account, either as encoded binary data or JSON format `{<program>: <state>}` - depending on encoding parameter
>
></details>

><details>
>  <summary>executable</summary>
>
>   Boolean indicating if the account contains a program (and is strictly read-only)
>
></details>

><details>
>  <summary>rentEpoch</summary>
>
>   The epoch at which this account will next owe rent
>
></details>

><details>
>  <summary>space</summary>
>
>   The data size of the account
>
></details>

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>   "method": "getMultipleAccounts",
>   "params": [
>      [
>        "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
>        "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"
>     ],
>      {
>        "encoding": "base58"
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
>   "context": { "apiVersion": "1.17.28", "slot": 92369488 },
>    "value": [
>      null,
>      null
>    ]
>  },
>  "id": 1
>}
>```
