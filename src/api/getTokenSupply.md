---
title: getTokenSupply
sidebar_label: getTokenSupply
---
# getTokenSupply RPC Method

## 

Returns the total supply of an SPL Token type.

### params

>`string` `required` Pubkey of account owner to query, as base-58 encoded string
>`object` `optional` Configuration object containing the following fields:

><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>

### result

>`object` A JSON object containing:

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
>    "method": "getTokenSupply",
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
>    "context": {"apiVersion": "1.17.28",
>     "slot": 93087633 },
>    "value": {
>      "amount": "1000000000000000",
>      "decimals": 9,
>      "uiAmount": 1000000,
>      "uiAmountString": "1000000"
>    }
>  },
>  "id": 1
>}
>```
