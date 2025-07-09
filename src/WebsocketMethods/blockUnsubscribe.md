---
title: blockUnsubscribe
sidebar_label: blockUnsubscribe
---
# blockUnsubscribe RPC Method

## 

Unsubscribe from block notifications

### params

>`integer` `required` subscription id to cancel

### result

>`boolean` unsubscribe success message

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "blockUnsubscribe",
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
