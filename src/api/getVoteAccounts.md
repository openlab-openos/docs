---
title: getVoteAccounts
sidebar_label: getVoteAccounts
---
# getVoteAccounts RPC Method

## 

Returns the account info and associated stake for all the voting accounts in the current bank.

### params

>`object` `optional` Configuration object containing the following fields:

><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>
>
><details>
>  <summary>votePubkey</summary>
>
>   Only return results for this validator vote address (base-58 encoded)
>
></details>
>
><details>
>  <summary>keepUnstakedDelinquents</summary>
>
>   Do not filter out delinquent validators with no stake
>
></details>
>
><details>
>  <summary>delinquentSlotDistance</summary>
>
>   Specify the number of slots behind the tip that a validator must fall to be considered delinquent. **NOTE**: For the sake of consistency between ecosystem products, it is **not** recommended that this argument be specified.
>
></details>


### result

>`object` The result field will be a JSON object of `current` and `delinquent` accounts, each containing an array of JSON objects with the following sub fields:

><details>
>  <summary>svotePubkey</summary>
>
>   Vote account address, as base-58 encoded string
>
></details>
>
><details>
>  <summary>nodePubkey</summary>
>
>   Validator identity, as base-58 encoded string
>
></details>
>
><details>
>  <summary>activatedStake</summary>
>
>   The stake, in lamports, delegated to this vote account and active in this epoch
>
></details>
>
><details>
>  <summary>epochVoteAccount</summary>
>
>   Whether the vote account is staked for this epoch
>
></details>
>
><details>
>  <summary>lastVote</summary>
>
>   Most recent slot voted on by this vote account
>
></details>
>
><details>
>  <summary>epochCredits</summary>
>
>   Latest history of earned credits for up to five epochs, as an array of arrays containing: [epoch, credits, previousCredits]
>
></details>
>
><details>
>  <summary>rootSlot</summary>
>
>   Current root slot for this vote account
>
></details>

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>   "jsonrpc": "2.0",
>   "id": 1,
>    "method": "getVoteAccounts",
>   "params": [
>      {
>        "votePubkey": "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw"
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
>    "current": [
>      {
>        "votePubkey": "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw",
>        "nodePubkey": "B97CCUW3AEZFGy6uUg6zUdnNYvnVq5VG8PUtb2HayTDD",
>        "activatedStake": 42,
>        "epochVoteAccount": true,
>        "commission": 0,
>        "lastVote": 147,
>        "epochCredits": [
>          [1, 64, 0],
>          [2, 192, 64]
>       ]
>      }
>    ],
>    "delinquent": []
>  },
> "id": 1
>}
>```
