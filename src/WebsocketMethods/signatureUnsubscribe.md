---
title: signatureUnsubscribe
sidebar_label: signatureUnsubscribe
---
# signatureUnsubscribe RPC Method

## 

Unsubscribe from signature confirmation notification

### params

>`number` `required` subscription id to cancel

### result

>`boolean` unsubscribe success message

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "signatureUnsubscribe",
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
