---
title: getBlocks
sidebar_label: getBlocks
---
# getBlocks RPC Method
## 

Returns a list of confirmed blocks between two slots

### params


 `u64`  `required` Start slot

 `u64`  `optional` End slot (must be no more than 500,000 blocks higher than the `start_slot`)

> - `object` `optional` Configuration object
>
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State > Commitment.
>
>   - "processed" is not supported
>
></details>

### result

`array`  An array of u64 integers listing confirmed blocks between `start_slot` and either `end_slot` - if provided, or latest confirmed slot, inclusive. Max range allowed is 500,000 slots.

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>   "id": 1,
>    "method": "getBlocks",
>   "params": [
>     5,
>     10
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": [],
>  "id": 1
>}
>```
