---
title: getBlock
sidebar_label: getBlock
---
# getBlock RPC Method
## 

Returns identity and transaction information about a confirmed block in the ledger

### params


 `u64`  `required` Slot number. 


 `object`  `optiona` Configuration object.
 - commitment 
   - The commitment describes how finalized a block is at that point in time. See [Configuring State Commitment](../Documentation.md).
 - encoding
>  -  Values: `json` `jsonParsed` `base58` `base64`
>  -  Default: `json`

   - Encoding format for Account data. See Parsed Responses.

     - `jsonParsed` attempts to use program-specific instruction parsers to return more human-readable and explicit data in the `transaction.message.instructions` list.
     - If `jsonParsed` is requested but a parser cannot be found, the instruction falls back to regular JSON encoding (`accounts`, `data`, and `programIdIndex` fields).

 - transactionDetails
>  -  Values: `full` `accounts` `signatures` `none`
>  -  Default: `full`

   - Level of transaction detail to return.

     - If `accounts` are requested, transaction details only include signatures and an annotated list of accounts in each transaction.
     - Transaction metadata is limited to only: fee, err, pre_balances, post_balances, pre_token_balances, and post_token_balances.


 - maxSupportedTransactionVersion 
   - The max transaction version to return in responses.
     - If the requested block contains a transaction with a higher version, an error will be returned.
     - If this parameter is omitted, only legacy transactions will be returned, and a block containing any versioned transaction will prompt the error.

 - rewards
   - Whether to populate the rewards array. If parameter not provided, the default includes rewards.



### result

`object | null` If specified block is not confirmed result will be null. Otherwise, an object containing:

<details>
  <summary>blockhash</summary>

    The blockhash of this block, as base-58 encoded string
</details>

<details>
  <summary>previousBlockhash</summary>

  The blockhash of this block's parent, as base-58 encoded string; if the parent block is not available due to ledger cleanup, this field will return "11111111111111111111111111111111"
</details>

<details>
  <summary>parentSlot</summary>

  The slot index of this block's parent
</details>

<details>
  <summary>transactions
  
  </summary>

  Present if "full" transaction details are requested; an array of JSON objects containing:

  - `transaction: <object|[string,encoding]>` - Transaction object, either in JSON format or encoded binary data, depending on encoding parameter.
  - `meta: <object>` - Transaction status metadata object or `null`.
  
</details>

<details>
  <summary>blockTime</summary>

  Estimated production time, as Unix timestamp (seconds since the Unix epoch). null if not available.
</details>

<details>
  <summary>blockHeight</summary>

  The number of blocks beneath this block.
</details>

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getBlock",
>    "params": [
>      91143612,
>      {
>        "encoding": "json",
>        "maxSupportedTransactionVersion": 0,
>        "transactionDetails": "full",
>        "rewards": false
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
>    "blockHeight": 89927966,
>    "blockTime": 1751221809,
>    "blockhash": "8PD6Z95gPSJ3rZZ5VoZFUX2y6N93KgeeWoZVpqtYirbR",
>    "parentSlot": 91143611,
>    "previousBlockhash": "FGtN2aC5j3gFt1CvQoj1DeA68tWr74j8ZhcyZdvUn5pm",
>    "transactions": [
>      {
>        "meta": {
>          "err": null,
>          "fee": 5000,
>          "innerInstructions": [],
>          "logMessages": [
>"Program Vote111111111111111111111111111111111111111 invoke [1]",
>						"Program Vote111111111111111111111111111111111111111 success"],
>          "postBalances": [306782646940,
>						25949527951,
>						1],
>          "postTokenBalances": [],
>          "preTokenBalances": [],
>          "rewards": null,
>          "status": {
>            "Ok": null
>          }
>        },
>        "transaction": {
>          "message": {
>            "accountKeys": [
>              "FHp9YbV7EbEFRhxfFqn3DJbt99uGRyEhKVpkZQMRapHu",
>              "3Qxh86eYZY9BJ19JATE6xsfeQ1BeMh8b8X4KpiUSUXnb",
>              "Vote111111111111111111111111111111111111111"
>            ],
>            "header": {
>              "numReadonlySignedAccounts": 0,
>              "numReadonlyUnsignedAccounts": 1,
>              "numRequiredSignatures": 1
>            },
>            "instructions": [
>              {
>                "accounts": [1, 2],
>                "data": "Fk63PpjZVbw9a1uTyYMiic7pxLT3597DS42R7i2aEpXFSMbx5xD3HcNjnvPcmUrESSFpQfdn7p4w4ku9783EtErcxj552bzfYL9NnQt4uJo3KaFwTK5RtdfR5ybKeSB4NbFqjKXFtppBUDVMAXUnMuzhUC3R27",
>                "programIdIndex": 2,
>                "stackHeight": null,
>              }
>            ],
>            "recentBlockhash": "8KYEQnzo3HCz4XhD8LGopLWHaA4DP8yHiBR95KQwJfP8"
>          },
>          "signatures": [
>            "6wuW43cgYg4X4QRixH9uKPF1ox89mesmTDQHXTLugBHa6pFYtg2a4kFSyPGgep8LLiaufELWx6HhtQU9GnheCKz"
>          ]
>        }
>      }
>    ]
>  },
>  "version": "legacy"
>}
>```
