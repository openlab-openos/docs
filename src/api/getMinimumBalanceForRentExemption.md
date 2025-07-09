---
title: getMinimumBalanceForRentExemption
sidebar_label: getMinimumBalanceForRentExemption
---
# getMinimumBalanceForRentExemption RPC Method

## 

Returns minimum balance required to make account rent exempt.

### params

>`usize` `required` The Account's data length

>`object` `optional` Configuration object containing the following fields:
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>




### result

>`u64` Minimum lamports required in the Account to remain rent free




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getMinimumBalanceForRentExemption",
>    "params": [
>      50
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 1238880,
>  "id": 1
>}
>```
