---
title: getBlockProduction
sidebar_label: getBlockProduction
---
# getBlockProduction RPC Method
## 

Returns recent block production information from the current or previous epoch.

### params


 `object`  `optional` Configuration object.

 <details>
  <summary>commitment</summary>

   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
</details>

<details>
  <summary>identity</summary>

    Only return results for this validator identity (base-58 encoded).
</details>

<details>
  <summary>range</summary>

    Slot range to return block production for. If parameter not provided, defaults to current epoch.

- `firstSlot: <u64>` - first slot to return block production information for (inclusive)
- `(optional) lastSlot: <u64>` - last slot to return block production information for (inclusive). If parameter not provided, defaults to the highest slot

</details>

### result

`object`  The result will be an RpcResponse JSON object with value equal to:

<details>
  <summary>byIdentity</summary>

    A dictionary of validator identities, as base-58 encoded strings. Value is a two element array containing the number of leader slots and the number of blocks produced.
</details>

<details>
  <summary>range</summary>

    Block production slot range

- `firstSlot: <u64>` - first slot of the block production information (inclusive)
- `(optional) lastSlot: <u64>` - last slot of block production information (inclusive)

</details>

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getBlockProduction"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
> "result": {
>    "context": {
>      "slot": 9887
>   },
>    "value": {
>      "byIdentity": {
>       "27BEtJg3VQnMsmSAytyhdTX5FxjTELC6pYPKcp61cG6A": [816, 816]
>     },
>      "range": {
>        "firstSlot": 92108256,
>        "lastSlot": 92363568
>     }
>   }
>  },
>  "id": 1
>}
>```
