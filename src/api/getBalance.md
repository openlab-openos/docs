---
title: getBalance
sidebar_label: getBalance
---
# getBalance RPC Method
## 

Returns the lamport balance of the account of provided Pubkey

### params


 `string`  `required` Pubkey of account to query, as base-58 encoded string.. 

<!-- 
 `object`  `optiona` Configuration object.
 - commitment 
   - The commitment describes how finalized a block is at that point in time. See [Configuring State Commitment](../Documentation.md). -->
 `object`  `optiona` Configuration object.
   <details>
    <summary>commitment</summary>
    The commitment describes how finalized a block is at that point in time. See [Configuring State Commitment](../Documentation.md). 
  </details>

   <details>
    <summary>minContextSlot</summary>
    The minimum slot that the request can be evaluated at. 
  </details>


### result

`u64`RpcResponse JSON object with value field set to the balance.

> **cURL**
> 
> ```bash
>
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getBalance",
>    "params": [
>      "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg"
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
>       "apiVersion":  "1.17.28", 
>       "slot": 92358926 
>    },
>    "value": 0
>  },
>  "id": 1
>}
>```
