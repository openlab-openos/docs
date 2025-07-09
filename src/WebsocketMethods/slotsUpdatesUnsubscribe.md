---
title: slotsUpdatesUnsubscribe
sidebar_label: slotsUpdatesUnsubscribe
---
# slotsUpdatesUnsubscribe RPC Method

## 

Unsubscribe from slot-update notifications

### params

>`number` `required` subscription id to cancel

### result

>`boolean` unsubscribe success message

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "slotsUpdatesUnsubscribe",
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
