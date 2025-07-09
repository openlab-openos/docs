---
title: getLargestAccounts
sidebar_label: getLargestAccounts
---
# getLargestAccounts RPC Method

## 

Returns the 20 largest accounts, by lamport balance (results may be cached up to two hours)

### params

>`object` `optional` Configuration object containing the following fields:
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>
><details>
>  <summary>epoch</summary>
>
>   An epoch for which the reward occurs. If omitted, the previous epoch will be used
>
></details>
><details>
>  <summary>minContextSlot</summary>
>    `value` : `circulating` `nonCirculating`
>
>    `Default` : 
>
>   Filter results by account type
>
></details>


### result

>`array` The result will be an RpcResponse JSON object with value equal to an array of objects containing:
><details>
>  <summary>address</summary>
>
>  Base-58 encoded address of the account
>
></details>
><details>
>  <summary>lamports</summary>
>
>   Number of lamports in the account
>
></details>




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>   "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getLargestAccounts",
>    "params": []
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "context": { "slot": 54 },
>   "value": [
>     {
>       "address": "qQi2ZZMfHqd2a2qDh8ixLjoBSvcvz5ou2vvJN1af3NM",
>        "lamports": 53582781085866909
>     },
>      {
>        "address": "21k675LsCx8nye1cfz6DLuqqW5AgkssPToKRuja845A8",
>        "lamports": 6189617792764261
>      }
>    ]
>  },
>  "id": 1
>}
>```
