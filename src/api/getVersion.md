---
title: getVersion
sidebar_label: getVersion
---
# getVersion RPC Method

## 

Returns the current Openverse version running on the node

### params

None


### result

>`object` A JSON object containing:

><details>
>  <summary>openverse-core</summary>
>
>   Software version of openverse-core
>
></details>
>
><details>
>  <summary>feature-set</summary>
>
>   Unique identifier of the current software's feature set
>
></details>

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getVersion"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>   "openverse-core": "1.17.28",
>   "feature-set": 3746964731
>  },
>  "id": 1
>}
>```
