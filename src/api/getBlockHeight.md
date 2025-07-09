---
title: getBlockHeight
sidebar_label: getBlockHeight
---
# getBlockHeight RPC Method
## 

Returns the current block height of the node

### params


 `object`  `optional` Configuration object.

 <details>
  <summary>commitment</summary>

   Array of u64 integers logging the amount of cluster stake in lamports that has voted on the block at each depth from 0 to MAX_LOCKOUT_HISTORY.
</details>

<details>
  <summary>totalStake</summary>

    Total active stake, in lamports, of the current epoch.
</details>

### result

`u64`  Current block height.


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getBlockHeight",
>    "params": []
>  }
'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 91147454,
>  "id": 1
>}
>```
