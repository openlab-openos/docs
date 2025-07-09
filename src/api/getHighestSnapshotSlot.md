---
title: getHighestSnapshotSlot
sidebar_label: getHighestSnapshotSlot
---
# getHighestSnapshotSlot RPC Method

## 

Returns the highest slot information that the node has snapshots for.

This will find the highest full snapshot slot, and the highest incremental snapshot slot based on the full snapshot slot, if there is one.

### params

None


### result

>`object` When the node has a snapshot, this returns a JSON object with the following fields:
><details>
>  <summary>full</summary>
>
>   The highest full snapshot slot
>
></details>
><details>
>  <summary>incremental</summary>
>
>   The highest incremental snapshot slot based on `full`
>
></details>


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getHighestSnapshotSlot"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "full": 92364479,
>    "incremental": null
>  },
>  "id": 1
>}
>```
