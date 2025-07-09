---
title: getMaxShredInsertSlot
sidebar_label: getMaxShredInsertSlot
---
# getMaxShredInsertSlot RPC Method

## 

Get the max slot seen from after shred insert.

### params

None

### result

>`u64` Slot number





> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getMaxShredInsertSlot"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 92369270,
>  "id": 1
>}
>```
