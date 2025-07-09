---
title: getBlockCommitment
sidebar_label: getBlockCommitment
---
# getBlockCommitment RPC Method
## 

Returns commitment for particular block

### params


 `u64`  `required` Block number, identified by Slot.

### result

`object`  `optiona` The result field will be a JSON object containing:


<details>
  <summary>commitment</summary>

   Array of u64 integers logging the amount of cluster stake in lamports that has voted on the block at each depth from 0 to MAX_LOCKOUT_HISTORY.
</details>

<details>
  <summary>totalStake</summary>

    Total active stake, in lamports, of the current epoch.
</details>

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getBlockCommitment",
>    "params": [
>      5
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "commitment": null,
>    "totalStake": 53108310680500112
>  },
>  "id": 1
>}
>```
