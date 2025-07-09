---
title: slotSubscribe
sidebar_label: slotSubscribe
---
# slotSubscribe RPC Method

## 

Subscribe to receive notification anytime a slot is processed by the validator

### params

None

### result

>`integer` Subscription id (needed to unsubscribe)

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "slotSubscribe",
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

The notification will be an object with the following fields:

- `parent: <u64>` - The parent slot
- `root: <u64>` - The current root slot
- `slot: <u64>` - The newly set slot value

> **Example**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "method": "slotNotification",
>  "params": {
>    "result": {
>      "parent": 75,
>     "root": 44,
>      "slot": 76
>    },
>    "subscription": 0
>  }
>}
>```