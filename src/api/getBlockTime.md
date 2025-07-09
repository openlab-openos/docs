---
title: getBlockTime
sidebar_label: getBlockTime
---
# getBlockTime RPC Method



## 

Returns the estimated production time of a block.

### params

 `u64`  `required` Block number, identified by Slot


### result

`i64`  Estimated production time, as Unix timestamp (seconds since the Unix epoch)

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>   "method": "getBlockTime",
>    "params": [
>      89630460
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 1750643783,
>  "id": 1
>}
>```
