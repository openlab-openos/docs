---
title: getProgramAccounts
sidebar_label: getProgramAccounts
---
# getProgramAccounts RPC Method

## 

Returns all accounts owned by the provided program Pubkey

### params

>`string` `required` Pubkey of program, as base-58 encoded string

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
>  <summary>withContext</summary>
>
>   Wrap the result in an RpcResponse JSON object
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
>
>  <summary>filters</summary>
>
>   Filter results using up to 4 filter objects.
>
></details>




### result

>`array` By default, returns an array of JSON objects. If withContext flag is set, the array will be wrapped in an RpcResponse JSON object.Each object contains:

>- `null`  - if the account at that Pubkey doesn't exist, or
>- Account objects with the following fields:

><details>
>  <summary>pubkey</summary>
>
>   The account Pubkey as base-58 encoded string
>
></details>

><details>
>  <summary>owner</summary>
>
>   Base-58 encoded Pubkey of the program this account has been assigned to
>
></details>

><details>
>  <summary>account</summary>
>
>   A JSON object containing:
>   - `lamports: <u64>` - number of lamports assigned to this account, as a u64
>   - `owner: <string>` - base-58 encoded Pubkey of the program this account has been assigned to
>   - `data: <[string,encoding]|object>` - data associated with the account, either as encoded binary data or JSON format `{<program>: <state>}` - depending on encoding parameter
>   - `executable: <bool>` - boolean indicating if the account contains a program (and is strictly read-only)
>   - `rentEpoch: <u64>` - the epoch at which this account will next owe rent, as u64
>   - `space: <u64>` - the data size of the account
>
></details>


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
> {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getProgramAccounts",
>    "params": [
>      "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
>      {
>        "filters": [
>          { "dataSize": 17 },
>         {
>           "memcmp": {
>              "offset": 4,
>              "bytes": "3Mc6vR"
>            }
>          }
>        ]
>      }
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": [
>  ],
>  "id": 1
>}
>```
