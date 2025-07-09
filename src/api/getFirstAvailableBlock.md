---
title: getFirstAvailableBlock
sidebar_label: getFirstAvailableBlock
---
# getFirstAvailableBlock RPC Method

## 

Returns the slot of the lowest confirmed block that has not been purged from the ledger
### params

None

### result

>`u64 `Slot


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getFirstAvailableBlock"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 89630460,
>  "id": 1
>}
>```
