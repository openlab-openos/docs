---
title: slotUnsubscribe
sidebar_label: slotUnsubscribe
---
# slotUnsubscribe RPC Method

## 

Unsubscribe from slot notifications

### params

>`number` `required` subscription id to cancel

### result

>`boolean` unsubscribe success message

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "slotUnsubscribe",
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
