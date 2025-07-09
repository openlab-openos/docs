---
title: getInflationReward
sidebar_label: getInflationReward
---
# getInflationReward RPC Method

## 

Returns the inflation / staking reward for a list of addresses for an epoch

### params

>`array` `optional` An array of addresses to query, as base-58 encoded strings
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
>
>   The minimum slot that the request can be evaluated at
>
></details>


### result

>`array` The result field will be a JSON array of objects containing:
><details>
>  <summary>epoch</summary>
>
>   Epoch for which reward occurred
>
></details>
><details>
>  <summary>effectiveSlot</summary>
>
>   The slot in which the rewards are effective
>
></details>
><details>
>  <summary>amount</summary>
>
>  Reward amount in lamports
>
></details>
><details>
>  <summary>postBalance</summary>
>
>   Post balance of the account in lamports
>
></details>
><details>
>  <summary>commission</summary>
>
>   Vote account commission when the reward was credited
>
></details>



> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>   "id": 1,
>   "method": "getInflationReward",
>   "params": [
>      [
>        "6dmNQ5jwLeLk5REvio1JcMshcbvkYMwy26sJ8pbkvStu",
>        "BGsqMegLpV6n6Ve146sSX2dTjUMj3M92HnU8BbNRMhF2"
>      ],
>     {
>       "epoch": 2
>     }
>   ]
> }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": [
>    {
>     "epoch": 2,
>     "effectiveSlot": 224,
>     "amount": 2500,
>     "postBalance": 499999442500
>   },
>   null
> ],
> "id": 1
>}
>```
