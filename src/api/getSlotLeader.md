---
title: getSlotLeader
sidebar_label: getSlotLeader
---
# getSlotLeader RPC Method

## 

Returns the current slot leader

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

>`string` Node identity Pubkey as base-58 encoded string


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getSlotLeader"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": "4izgEDdCm2Nzzh6MhrASGw3HJ6MLHRGksPSNAEiXTRgX",
>  "id": 1
>}
>```
