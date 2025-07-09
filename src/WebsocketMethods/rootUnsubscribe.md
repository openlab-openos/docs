---
title: rootUnsubscribe
sidebar_label: rootUnsubscribe
---
# rootUnsubscribe RPC Method

## 

Unsubscribe from root notifications

### params

>`number` `required` subscription id to cancel

### result

>`boolean` unsubscribe success message

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "rootUnsubscribe",
>  "params": [
>    0
>  ]
>}
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": true,
>  "id": 1
>}
>```
