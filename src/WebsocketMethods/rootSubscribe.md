---
title: rootSubscribe
sidebar_label: rootSubscribe
---
# rootSubscribe RPC Method

## 

Subscribe to receive notification anytime a new root is set by the validator.

### params

None

### result

>`integer` subscription id (needed to unsubscribe)

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "rootSubscribe"
>}
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": 0,
>  "id": 1
>}
>```

### Notification Format:

The result is the latest root slot number.

>```bash
>{
>  "jsonrpc": "2.0",
> "method": "rootNotification",
> "params": {
>    "result": 42,
>   "subscription": 0
>  }
>}
>```
