---
title: getEpochInfo
sidebar_label: getEpochInfo
---
# getEpochInfo RPC Method

## 

Returns information about the current epoch

### params

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

>`object` The result field will be an object with the following fields:
><details>
>  <summary>absoluteSlot</summary>
>
>   The current slot
>
></details>
><details>
>  <summary>blockHeight</summary>
>
>   The current block height
>
></details>
><details>
>  <summary>epoch</summary>
>
>   The current epoch
>
></details>
><details>
>  <summary>slotIndex</summary>
>
>   The current slot relative to the start of the current epoch
>
></details>
><details>
>  <summary>slotsInEpoch</summary>
>
>   The number of slots in this epoch
>
></details>
><details>
>  <summary>transactionCount</summary>
>
>   Total number of transactions processed without error since genesis
>
></details>



> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getEpochInfo"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "absoluteSlot": 92364170,
>    "blockHeight": 91148091,
>    "epoch": 226,
>    "slotIndex": 255914,
>    "slotsInEpoch": 432000,
>    "transactionCount": 2920901947
>  },
>  "id": 1
>}
>```
