---
title: getTokenLargestAccounts
sidebar_label: getTokenLargestAccounts
---
# getTokenLargestAccounts RPC Method

## 

Returns the 20 largest accounts of a particular SPL Token type.

### params

>`string` `required` Pubkey of account owner to query, as base-58 encoded string
>`object` `required` A JSON object with one of the following fields:

><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>

### result

>`array` An array of JSON objects containing:

>
><details>
>  <summary>address</summary>
>
>   The address of the token account
>
></details>
>
><details>
>  <summary>amount</summary>
>
>   The raw token account balance without decimals, a string representation of u64
>
></details>
>
><details>
>  <summary>decimals</summary>
>
>   Number of base 10 digits to the right of the decimal place
>
></details>
>
><details>
>  <summary>uiAmount</summary>
>
>   The token account balance, using mint-prescribed decimals *DEPRECATED*
>
></details>
>
><details>
>  <summary>uiAmountString</summary>
>
>   The token account balance as a string, using mint-prescribed decimals
>
></details>




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getTokenLargestAccounts",
>    "params": [
>      "USDTWFmHW5ieSiQM7ea4fPPdx3a5zMEgp1yqgRqjZdt"
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "context": { "slot": 1114 },
>    "value": [
>      {
>        "address": "FsDAXvdxEgyDkTc7MBWiMHCioLzpEEZxLKpsNZNWAkuE",
>        "amount": "999980300000000",
>        "decimals": 9,
>        "uiAmount": 999980.3,
>        "uiAmountString": "999980.3"
>      },
>      {
>        "address": "6XVGq2EgChCvF6TnC4sZn1RgHF7rcQg9DM6L7TB6vQxw",
>        "amount": "13100000000",
>        "decimals": 9,
>        "uiAmount": 13.1,
>        "uiAmountString": "13.1"
>      }
>    ]
>  },
>  "id": 1
>}
>```
