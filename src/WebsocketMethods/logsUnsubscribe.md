---
title: logsUnsubscribe
sidebar_label: logsUnsubscribe
---
# logsUnsubscribe RPC Method

## 

Unsubscribe from transaction logging

### params

>`integer` `required` subscription id to cancel

### result

>`boolean` unsubscribe success message

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "logsUnsubscribe",
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
