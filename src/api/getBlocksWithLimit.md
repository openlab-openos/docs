---
title: getBlocksWithLimit
sidebar_label: getBlocksWithLimit
---
# getBlocksWithLimit RPC Method





## 

Returns a list of confirmed blocks between two slots

### params

 `u64`  `required` Start slot

 `u64`  `optional` Limit (must be no more than 500,000 blocks higher than the `start_slot`)

>  `object` `optional` Configuration object
>
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State  Commitment.
>
>   - "processed" is not supported
>
></details>

### result

`array`  An array of u64 integers listing confirmed blocks starting at `start_slot` for up to `limit` blocks, inclusive.

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>   "id": 1,
>    "method": "getBlocksWithLimit",
>    "params": [
>      5,
>      3
>   ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": [89630460, 89630461, 89630462],
>  "id": 1
>}
>```
