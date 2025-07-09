---
title: getSignaturesForAddress
sidebar_label: getSignaturesForAddress
---
# getSignaturesForAddress RPC Method

## 

Returns signatures for confirmed transactions that include the given address in their `accountKeys` list. Returns signatures backwards in time from the provided signature or most recent confirmed block

### params

>`string` `required` Account address as base-58 encoded string

>`object` `optional` Configuration object containing the following fields:
><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>

><details>
>  <summary>minContextSlot</summary>
>
>   The minimum slot that the request can be evaluated at
>
></details>

><details>
>  <summary>limit</summary>
>
>   Maximum transaction signatures to return (between 1 and 1,000).
>
>   Default: `1000`
>
></details>

><details>
>  <summary>defore</summary>
>
>   Start searching backwards from this transaction signature. If not provided the search starts from the top of the highest max confirmed block.
>
>
></details>
>
><details>
>
>  <summary>until</summary>
>
>   Search until this transaction signature, if found before limit reached
>
></details>




### result

>`array` An array of transaction signature information objects, ordered from newest to oldest transaction, containing:


><details>
>  <summary>signature</summary>
>
>   Transaction signature as base-58 encoded string
>
></details>

><details>
>  <summary>slot</summary>
>
>   The slot that contains the block with the transaction
>
></details>

><details>
>  <summary>err</summary>
>
>   Error if transaction failed, null if transaction succeeded. See TransactionError definitions for more info.
>
></details>

><details>
>  <summary>mome</summary>
>
>   Memo associated with the transaction, null if no memo is present
>
></details>

><details>
>  <summary>blockTime</summary>
>
>   Estimated production time, as Unix timestamp (seconds since the Unix epoch) of when transaction was processed. null if not available.
>
></details>

><details>
>  <summary>confirmationStatus</summary>
>
>   The transaction's cluster confirmation status; Either processed, confirmed, or finalized. See Commitment for more on optimistic confirmation.
>
></details>




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getSignaturesForAddress",
>    "params": [
>      "Vote111111111111111111111111111111111111111",
>      {
>        "limit": 1
>      }
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
>      "signature": "62Ti1pHfitA5FSCRttWPXrzqdcm5AgmqFWNkNiimijLhaN5VpVsWsAB1sT7mY7DgnStsYhuhe7nfsJuJhX5Yv1fx",
>      "slot": 92396897,
>      "err": null,
>      "memo": null,
>      "blockTime": 1751698325,
>      "confirmationStatus": "finalized"
>    }
>  ],
>  "id": 1
>}
>```
