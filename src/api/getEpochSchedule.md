---
title: getEpochSchedule
sidebar_label: getEpochSchedule
---
# getEpochSchedule RPC Method

## 

Returns information about the current epoch

### params

None


### result

>`object` The result field will be an object with the following fields:
><details>
>  <summary>slotsPerEpoch</summary>
>
>   The maximum number of slots in each epoch
>
></details>
><details>
>  <summary>leaderScheduleSlotOffset</summary>
>
>   The number of slots before beginning of an epoch to calculate a leader schedule for that epoch
>
></details>
><details>
>  <summary>warmup</summary>
>
>   Whether epochs start short and grow
>
></details>
><details>
>  <summary>firstNormalEpoch</summary>
>
>   First normal-length epoch, `log2(slotsPerEpoch)` - `log2(MINIMUM_SLOTS_PER_EPOCH)`
>
></details>
><details>
>  <summary>firstNormalSlot</summary>
>
>   Minimum number of slots in an epoch, `MINIMUM_SLOTS_PER_EPOCH * (2.pow(firstNormalEpoch) - 1)`
>
></details>




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getEpochSchedule"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "firstNormalEpoch": 14,
>    "firstNormalSlot": 524256,
>    "leaderScheduleSlotOffset": 432000,
>    "slotsPerEpoch": 432000,
>    "warmup": true
>  },
>  "id": 1
>}
>```
