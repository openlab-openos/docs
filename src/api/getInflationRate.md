---
title: getInflationRate
sidebar_label: getInflationRate
---
# getInflationRate RPC Method

## 

Returns the specific inflation values for the current epoch

### params

None


### result

>`object` The result field will be a JSON object with the following fields
><details>
>  <summary>total</summary>
>
>   Total inflation
>
></details>
><details>
>  <summary>validator</summary>
>
>  Inflation allocated to validators
>
></details>
><details>
>  <summary>foundation</summary>
>
>   Inflation allocated to the foundation
>
></details>
><details>
>  <summary>epoch</summary>
>
>   Epoch for which these values are valid
>
></details>




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>   "id": 1,
>    "method": "getInflationRate"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
> "result": {
>    "total": 0.06617367592760325,
>    "validator": 0.06617367592760325,
>    "foundation": 0,
>    "epoch": 226
>  },
>  "id": 1
>}
>```
