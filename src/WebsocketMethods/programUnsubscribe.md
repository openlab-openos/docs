---
title: programUnsubscribe
sidebar_label: programUnsubscribe
---
# programUnsubscribe RPC Method

## 

Unsubscribe from program-owned account change notifications

### params

>`number` `required` id of account Subscription to cancel

### result

>`boolean` unsubscribe success message

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "programUnsubscribe",
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
