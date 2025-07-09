---
title: slotsUpdatesSubscribe
sidebar_label: slotsUpdatesSubscribe
---
# slotsUpdatesSubscribe RPC Method

## 

Subscribe to receive a notification from the validator on a variety of updates on every slot

### params

None

### result

>`integer` Subscription id (needed to unsubscribe)

> **cURL**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "id": 1,
>  "method": "slotsUpdatesSubscribe",
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

- `err: <string|undefined>` - The error message. Only present if the update is of type "dead".
- `parent: <u64|undefined>` - The parent slot. Only present if the update is of type "createdBank".
- `slot: <u64>` - The newly updated slot
- `stats: <object|undefined>` - The error message. Only present if the update is of type "frozen". An object with the following fields:
  - `maxTransactionsPerEntry: <u64`>,
  - `numFailedTransactions: <u64>`,
  - `numSuccessfulTransactions: <u64>`,
  - `numTransactionEntries: <u64>`,
- `timestamp: <i64>` - The Unix timestamp of the update in milliseconds
- `type: <string>` - The update type, one of:
  - "firstShredReceived"
  - "completed"
  - "createdBank"
  - "frozen"
  - "dead"
  - "optimisticConfirmation"
  - "root"

> ```bash
>{
>  "jsonrpc": "2.0",
>  "method": "slotsUpdatesNotification",
> "params": {
>    "result": {
>      "parent": 75,
>      "slot": 76,
>      "timestamp": 1625081266243,
>      "type": "optimisticConfirmation"
>    },
>    "subscription": 0
>  }
>}
>```