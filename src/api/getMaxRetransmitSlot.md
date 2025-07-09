---
title: getMaxRetransmitSlot
sidebar_label: getMaxRetransmitSlot
---
# getMaxRetransmitSlot RPC Method

## 

Get the max slot seen from retransmit stage.

### params

None

### result

>`u64` Slot number





> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
> {
>   "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getMaxRetransmitSlot"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 92369119,
>  "id": 1
>}
>```
