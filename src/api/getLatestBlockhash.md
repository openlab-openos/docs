---
title: getLatestBlockhash
sidebar_label: getLatestBlockhash
---
# getLatestBlockhash RPC Method

## 

Returns the latest blockhash

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

>`object` RpcResponse JSON object with value field set to a JSON object including:
><details>
>  <summary>blockhash</summary>
>
>  A Hash as base-58 encoded string
>
></details>
><details>
>  <summary>lastValidBlockHeight</summary>
>
>   Last block height at which the blockhash will be valid
>
></details>




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getLatestBlockhash",
>    "params": [
>      {
>        "commitment": "processed"
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
>    "context": {
>      "apiVersion": "1.17.28",
>      "slot": 92368858
>   },
>   "value": {
>     "blockhash": "GUkTC2xhb7AZrBtb8aSwVtVtNQGopjNR11nDgSbS83KV",
>      "lastValidBlockHeight": 91153079
>    }
>  },
>  "id": 1
>}
>```
