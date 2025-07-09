---
title: getSlot
sidebar_label: getSlot
---
# getSlot RPC Method

## 

Returns the slot that has reached the given or default commitment level

### params

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


### result

>`u64` Current slot


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getSlot"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 92399297,
>  "id": 1
>}
>```
