---
title: getRecentPrioritizationFees
sidebar_label: getRecentPrioritizationFees
---
# getRecentPrioritizationFees RPC Method

## 

Returns a list of prioritization fees from recent blocks.

### params

>`array` `optional` An array of Account addresses (up to a maximum of 128 addresses), as base-58 encoded strings

### result

>`array` An array of performance sample objects containing:


><details>
>  <summary>slot</summary>
>
>   Slot in which sample was taken at
>
></details>

><details>
>  <summary>prioritizationFee</summary>
>
>   The per-compute-unit fee paid by at least one successfully landed transaction, specified in increments of micro-lamports (0.000001 lamports)
>
></details>




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getRecentPrioritizationFees",
>    "params": [
>      ["CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY"]
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": [
>    {
>      "slot": 92391400,
>      "prioritizationFee": 0
>    },
>    {
>     "slot": 92391432,
>      "prioritizationFee": 1000
>    },
>    {
>      "slot": 92391401,
>      "prioritizationFee": 500
>   {
>      "slot": 92391454,
>      "prioritizationFee": 0
>    },
>    {
>      "slot": 92391353,
>      "prioritizationFee": 1234
>    }
>  ],
>  "id": 1
>}
>```
