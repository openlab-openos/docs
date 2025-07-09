---
title: getLeaderSchedule
sidebar_label: getLeaderSchedule
---
# getLeaderSchedule RPC Method

## 

Returns the leader schedule for an epoch

### params

>`u64` `optional` Fetch the leader schedule for the epoch that corresponds to the provided slot. If unspecified, the leader schedule for the current epoch is fetched.

>`object` `optional` Configuration object containing the following fields:
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>
><details>
>  <summary>identity</summary>
>
>   Only return results for this validator identity (base-58 encoded)
>
></details>



### result

>`object|null` Returns `null` if requested epoch is not found, otherwise returns an object where:
>- Keys are validator identities (as base-58 encoded strings)
>- Values are arrays of leader slot indices relative to the first slot in the requested epoch




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>   "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getLeaderSchedule",
>   "params": [
>      null,
>      {
>        "identity": "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F"
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
>  },
>  "id": 1
>}
>```
