---
title: getFeeForMessage
sidebar_label: getFeeForMessage
---
# getFeeForMessage RPC Method

## 

Get the fee the network will charge for a particular Message

### params

>`string` `required` Base-64 encoded Message.
>`object` `optional` Configuration object.
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>
><details>
>  <summary>minContextSlot</summary>
>
>   The minimum slot that the request can be evaluated at.
>
></details>


### result

>`u64 | null` Fee corresponding to the message at the specified blockhash


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getFeeForMessage",
>    "params": [
>      "AQABAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAA",
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
>    "context": { "apiVersion": "1.17.28","slot": 92364463 },
>    "value": null
>  },
>  "id": 1
>}
>```
