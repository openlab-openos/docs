---
title: getInflationGovernor
sidebar_label: getInflationGovernor
---
# getInflationGovernor RPC Method

## 

Returns the current inflation governor

### params

>`object` `optional` Configuration object.
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>


### result

>`object` The result field will be a JSON object with the following fields
><details>
>  <summary>foundation</summary>
>
>   Percentage of total inflation allocated to the foundation
>
></details>
><details>
>  <summary>initial</summary>
>
>   Initial inflation percentage from time 0
>
></details>
><details>
>  <summary>foundationTerm</summary>
>
>   Duration of foundation pool inflation in years
>
></details>
><details>
>  <summary>taper</summary>
>
>   Rate per year at which inflation is lowered. (Rate reduction is derived using the target slot time in genesis config)
>
></details>
><details>
>  <summary>terminal</summary>
>
>   Terminal inflation percentage
>
></details>



> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getInflationGovernor"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "foundation": 0,
>    "foundationTerm": 0,
>    "initial": 0.08,
>    "taper": 0.15,
>    "terminal": 0.015
>  },
>  "id": 1
>}
>```
