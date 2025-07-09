---
title: getTokenAccountBalance
sidebar_label: getTokenAccountBalance
---
# getTokenAccountBalance RPC Method

## 

Returns the token balance of an SPL Token account.

### params

>`string` `required` Pubkey of Token account to query, as base-58 encoded string
>`object` `optional` Configuration object containing the following fields:

><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>


### result

>`object` The result will be a JSON object containing:

><details>
>  <summary>amount</summary>
>
>   The raw balance without decimals, a string representation of u64
>
></details>

><details>
>  <summary>decimals</summary>
>
>   Number of base 10 digits to the right of the decimal place
>
></details>

><details>
>  <summary>uiAmount</summary>
>
>   The balance, using mint-prescribed decimals *DEPRECATED*
>
></details>

><details>
>  <summary>uiAmountString</summary>
>
>   The balance as a string, using mint-prescribed decimals
>
></details>

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getTokenAccountBalance",
>    "params": [
>      "7fUAJdStEuGbc3sM84cKRL6yYaaSstyLSU4ve5oovLS7"
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "context": { "apiVersion": "1.17.28","slot": 92400401 },
>    "value": {
>      "amount": "99500000000000",
>      "decimals": 8,
>      "uiAmount": 995000,
>      "uiAmountString": "995000"
>    }
>  },
>  "id": 1
>}
>```
