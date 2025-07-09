---
title: isBlockhashValid
sidebar_label: isBlockhashValid
---
# isBlockhashValid RPC Method

## 

Returns whether a blockhash is still valid or not

### params

>`string` `required` The blockhash of the block to evaluate, as base-58 encoded string
>`object` `optional` Configuration object containing the following fields:

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

### result

>`bool` Whether the blockhash is still valid

> **cURL**
>
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>   "id": 45,
>   "method": "isBlockhashValid",
>   "params": [
>     "J7rBdM6AecPDEZp8aPq5iPSNKVkU5Q76F3oAV4eW5wsW",
>      {
>        "commitment": "processed"
>     }
>    ]
>  }
>'
>```

> **Response**
>
> ```bash
>{
>  "jsonrpc": "2.0",
> "result": {
>   "context": { "slot": 2483 },
>   "value": false
>  },
> "id": 45
>}
>
>```
