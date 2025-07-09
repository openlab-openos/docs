---
title: minimumLedgerSlot
sidebar_label: minimumLedgerSlot
---
# minimumLedgerSlot RPC Method

## 

Returns the lowest slot that the node has information about in its ledger.

### params

None

### result

>`u64` The minimum ledger slot number

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>   "jsonrpc": "2.0",
>   "id": 1,
>   "method": "minimumLedgerSlot"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 89670172,
>  "id": 1
>}
>```
