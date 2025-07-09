---
title: getStakeMinimumDelegation
sidebar_label: getStakeMinimumDelegation
---
# getStakeMinimumDelegation RPC Method

## 

Returns the stake minimum delegation, in lamports.

### params

>`object` `optional` Configuration object containing the following fields:

><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>

### result

>`u64` The stake minimum delegation, in lamports


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getStakeMinimumDelegation"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "context": { "apiVersion": "1.17.28","slot": 92399375 },
>    "value": 1
>  },
>  "id": 1
>}
>```
