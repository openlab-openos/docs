---
title: getSignatureStatuses
sidebar_label: getSignatureStatuses
---
# getSignatureStatuses RPC Method

## 

Returns the statuses of a list of signatures. Each signature must be a txid, the first signature of a transaction.

### params

>`array` `required` An array of transaction signatures to confirm, as base-58 encoded strings (up to a maximum of 256)

>`object` `optional` Configuration object containing the following fields:

><details>
>  <summary>searchTransactionHistory</summary>
>
>   if true - a Openverse node will search its ledger cache for any signatures not found in the recent status cache
>
></details>


### result

>`array` An array of RpcResponse `<object>` consisting of either null or an object containing the following fields:

><details>
>  <summary>slot</summary>
>
>   The slot the transaction was processed
>
></details>

><details>
>  <summary>confirmations</summary>
>
>   Number of blocks since signature confirmation, null if rooted, as well as finalized by a supermajority of the cluster
>
></details>

><details>
>  <summary>err</summary>
>
>   Error if transaction failed, null if transaction succeeded. See TransactionError definitions for more info.
>
></details>

><details>
>  <summary>err</summary>
>
>   Error if transaction failed, null if transaction succeeded. See TransactionError definitions
>
></details>

><details>
>  <summary>confirmationStatus</summary>
>
>   The transaction's cluster confirmation status; Either processed, confirmed, or finalized. See Commitment for more on optimistic confirmation.
>
></details>

><details>
>  <summary>status</summary>
>
>   DEPRECATED Transaction status
>
>   - `"Ok": <null>` - Transaction was successful
>   - `"Err": <ERR>` - Transaction failed with TransactionError
>
></details>




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getSignatureStatuses",
>    "params": [
>      [
>        "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW"
>      ],
>      {
>        "searchTransactionHistory": true
>      }
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "context": {
>      "apiVersion": "1.17.28",
>      "slot": 92399199
>    },
>    "value": [
>      null
>    ]
> },
>  "id": 1
>}
>```
