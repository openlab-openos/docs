---
title: accountUnsubscribe
sidebar_label: accountUnsubscribe
---
# accountUnsubscribe RPC Method

## 

Unsubscribe from account change notifications

### params

>`number` `required` id of the account Subscription to cancel

### result

>`boolean` unsubscribe success message

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "accountUnsubscribe",
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
