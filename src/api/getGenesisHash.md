---
title: getGenesisHash
sidebar_label: getGenesisHash
---
# getGenesisHash RPC Method

## 

Returns the genesis hash

### params

None

### result

>`string` A Hash as base-58 encoded string


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getGenesisHash"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": "3fKUorja3cvNHFRLD6A7qLJDt4nGATYpCKh9LNPyR3bv",
>  "id": 1
>}
>```
