---
title: Common JSON Data Structures for Openverse RPC Methods
sidebar_label: Data Structures sa JSON
---

Various Openverse RPC methods will return more complex responses as structured JSON objects, filled with specific keyed values.

The most common of these JSON data structures include:

- [transactions](#)
- [inner instructions](#)
- [token balances](#)

## Transactions

Transactions are quite different from those on other blockchains. Be sure to review [Anatomy of a Transaction](#) to learn about transactions on Openverse.

### JSON

The JSON structure of a transaction is defined as follows:

```bash
"transaction": {
  "message": {
    "accountKeys": [
      "EF3cbGuhJus5mCdGZkVz7GQce7QHbswBhZu6fmK9zkCR",
      "4LAyP5B5jNyNm7Ar2dG8sNipEiwTMEyCHd1iCHhhXYkY",
      "11111111111111111111111111111111"
    ],
    "header": {
      "numReadonlySignedAccounts": 0,
      "numReadonlyUnsignedAccounts": 1,
      "numRequiredSignatures": 1
    },
    "instructions": [
      {
        "accounts": [
          0,
          1
        ],
        "data": "3Bxs411Dtc7pkFQj",
        "programIdIndex": 2,
        "stackHeight": null
      }
    ],
    "recentBlockhash": "6pw7JBwq9tb5GHiBQgVY6RAp5otbouwYvEc1kbbxKFec"
  },
  "signatures": [
    "2M8mvwhtxyz3vAokXESVeR9FQ4t9QQxF5ek6ENNBBHVkW5XyZvJVK5MQej5ccwTZH6iWBJJoZ2CcizBs89pvpPBh"
  ]
}
```

#### Reference

- `message: <object>` - Defines the content of the transaction.
- `accountKeys: <array[string]>` - List of base-58 encoded public keys used by the transaction, including by the instructions and for signatures. The first `message.header.numRequiredSignatures` public keys must sign the transaction.
- `header: <object>` - Details the account types and signatures required by the transaction.
  - `numRequiredSignatures: <number>` - The total number of signatures required to make the transaction valid. The signatures must match the first `numRequiredSignatures` of `message.accountKeys`.
  - `numReadOnlySignedAccounts: <number>` - The last `numReadOnlySignedAccounts` of the signed keys are read-only accounts. Programs may process multiple transactions that load read-only accounts within a single PoH entry, but are not permitted to credit or debit lamports or modify account data. Transactions targeting the same read-write account are evaluated sequentially.
  - `numReadOnlyUnsignedAccounts: <number>` - The last `numReadOnlyUnsignedAccounts` of the unsigned keys are read-only accounts.
- `recentBlockhash: <string>` - A base-58 encoded hash of a recent block in the ledger used to prevent transaction duplication and to give transactions lifetimes.
- `instructions: <array[object]>` - List of program instructions that will be executed in sequence and committed in one atomic transaction if all succeed.
  - `programIdIndex: <number>` - Index into the `message.accountKeys` array indicating the program account that executes this instruction.
  - `accounts: <number>` - List of ordered indices into the `message.accountKeys` array indicating which accounts to pass to the program.
  - `data: <string>` - The program input data encoded in a base-58 string.
- `addressTableLookups: <array[object]|undefined>` - List of address table lookups used by a transaction to dynamically load addresses from on-chain address lookup tables. Undefined if maxSupportedTransactionVersion is not set.
  - `accountKey: <string>` - base-58 encoded public key for an address lookup table account.
  - `writableIndexes: <array[number]>` - List of indices used to load addresses of writable accounts from a lookup table.
  - `readonlyIndexes: <array[number]>` - List of indices used to load addresses of readonly accounts from a lookup table.
- `signatures: <array[string]>` - A list of base-58 encoded signatures applied to the transaction. The list is always of length `message.header.numRequiredSignatures` and not empty. The signature at index i corresponds to the public key at index `i` in `message.accountKeys`. The first one is used as the [transaction id](#).


### JSON Parsed

The JSON parsed structure of a transaction follows a similar structure to the regular JSON format, with additional parsing of account and instruction information:

```bash
"transaction": {
  "message": {
    "accountKeys": [
      {
        "pubkey": "EF3cbGuhJus5mCdGZkVz7GQce7QHbswBhZu6fmK9zkCR",
        "signer": true,
        "source": "transaction",
        "writable": true
      },
      {
        "pubkey": "4LAyP5B5jNyNm7Ar2dG8sNipEiwTMEyCHd1iCHhhXYkY",
        "signer": false,
        "source": "transaction",
        "writable": true
      },
      {
        "pubkey": "11111111111111111111111111111111",
        "signer": false,
        "source": "transaction",
        "writable": false
      }
    ],
    "instructions": [
      {
        "parsed": {
          "info": {
            "destination": "4LAyP5B5jNyNm7Ar2dG8sNipEiwTMEyCHd1iCHhhXYkY",
            "lamports": 100000000,
            "source": "EF3cbGuhJus5mCdGZkVz7GQce7QHbswBhZu6fmK9zkCR"
          },
          "type": "transfer"
        },
        "program": "system",
        "programId": "11111111111111111111111111111111",
        "stackHeight": null
      }
    ],
    "recentBlockhash": "6pw7JBwq9tb5GHiBQgVY6RAp5otbouwYvEc1kbbxKFec"
  },
  "signatures": [
    "2M8mvwhtxyz3vAokXESVeR9FQ4t9QQxF5ek6ENNBBHVkW5XyZvJVK5MQej5ccwTZH6iWBJJoZ2CcizBs89pvpPBh"
  ]
}
```

- `message: <object>` - Defines the content of the transaction.
  - `accountKeys: <array[object]>` - List of account information used by the transaction.
    - `pubkey: <string>` - The base-58 encoded public key of the account.
    - `signer: <boolean>` - Indicates if the account is a required transaction signer.
    - `writable: <boolean>` - Indicates if the account is writable.
    - `source: <string>` - Source of the account (transaction or lookup table).
  - `recentBlockhash: <string>` - A base-58 encoded hash of a recent block in the ledger used to prevent transaction duplication and to give transactions lifetimes.
  - `instructions: <array[object]>` - List of parsed program instructions.
    - `program: <string>` - The name of the program being called.
    - `programId: <string>` - The base-58 encoded public key of the program.
    - `stackHeight: <number|null>` - The stack height of the instruction.
    - `parsed: <object>` - Program-specific parsed data.
      - `type: <string>` - The type of instruction (e.g., "transfer").
      - `info: <object>` - Parsed instruction information specific to the program and instruction type.
- `signatures: <array[string]>` - A list of base-58 encoded signatures applied to the transaction.



### Transaction Status Metadata


```bash
{
  "meta": {
    "err": null,
    "fee": 5000,
    "innerInstructions": [],
    "logMessages": [],
    "postBalances": [499998932500, 26858640, 1, 1, 1],
    "postTokenBalances": [],
    "preBalances": [499998937500, 26858640, 1, 1, 1],
    "preTokenBalances": [],
    "rewards": null,
    "status": {
      "Ok": null
    }
  }
}
```

- `err: <object|null>` - Error if transaction failed, null if transaction succeeded. TransactionError definitions
- `fee: <u64>` - fee this transaction was charged, as u64 integer
- `preBalances: <array>` - array of u64 account balances from before the transaction was processed
- `postBalances: <array>` - array of u64 account balances after the transaction was processed
- `innerInstructions: <array|null>` - List of inner instructions or null if inner instruction recording was not enabled during this transaction
- `preTokenBalances: <array|undefined>` - List of token balances from before the transaction was processed or omitted if token balance recording was not yet enabled during this transaction
- `postTokenBalances: <array|undefined>` - List of token balances from after the transaction was processed or omitted if token balance recording was not yet enabled during this transaction
- `logMessages: <array|null>` - array of string log messages or null if log message recording was not enabled during this transaction
- `rewards: <array|null>` - transaction-level rewards; an array of JSON objects containing:
  - `pubkey: <string>` - The public key, as base-58 encoded string, of the account that received the reward
  - `lamports: <i64>`- number of reward lamports credited or debited by the account, as a i64
  - `postBalance: <u64>` - account balance in lamports after the reward was applied
  - `rewardType: <string|undefined>` - type of reward: "fee", "rent", "voting", "staking"
  - `commission: <u8|undefined>` - vote account commission when the reward was credited, only present for voting and staking rewards
- DEPRECATED: `status: <object>` - Transaction status
  - `"Ok": <null>` - Transaction was successful
  - `"Err": <ERR>` - Transaction failed with TransactionError
- `loadedAddresses: <object|undefined>` - Transaction addresses loaded from address lookup tables. Undefined if maxSupportedTransactionVersion is not set in request params, or if jsonParsed encoding is set in request params.
  - `writable: <array[string]>` - Ordered list of base-58 encoded addresses for writable loaded accounts
  - `readonly: <array[string]>` - Ordered list of base-58 encoded addresses for readonly loaded accounts
- `returnData: <object|undefined>` - the most-recent return data generated by an instruction in the transaction, with the following fields:
  - `programId: <string>` - the program that generated the return data, as base-58 encoded Pubkey
  - `data: <[string, encoding]>` - the return data itself, as base-64 encoded binary data
- `computeUnitsConsumed: <u64|undefined>` - number of compute units consumed by the transaction
- `version: <"legacy"|number|undefined>` - Transaction version. Undefined if maxSupportedTransactionVersion is not set in request params.
- `signatures: <array>` - present if "signatures" are requested for transaction details; an array of signatures strings, corresponding to the transaction order in the block


### Inner Instructions


The Openverse runtime records the cross-program instructions that are invoked during transaction processing and makes these available for greater transparency of what was executed on-chain per transaction instruction. Invoked instructions are grouped by the originating transaction instruction and are listed in order of processing.

The JSON structure of inner instructions is defined as a list of objects in the following structure:
```bash
"innerInstructions": [
  {
    "index": 0,
    "instructions": [
      {
        "accounts": [
          0,
          1,
          2
        ],
        "data": "WPNHsFPyEMr",
        "programIdIndex": 3,
        "stackHeight": 2
      },
      {
        "accounts": [
          0,
          1
        ],
        "data": "11111dBUPbGETd4QtNMQVg8HqgcZtKy6DcJm6R4TZufJkuhkDS47VsauCCGhLf2xrm5BQ",
        "programIdIndex": 2,
        "stackHeight": 3
      }
    ]
  }
]
```
- `index: number` - Index of the transaction instruction from which the inner instruction(s) originated
- `instructions`: <array[object]> - Ordered list of inner program instructions that were invoked during a single transaction instruction.
  - `programIdIndex: <number>` - Index into the message.accountKeys array indicating the program account that executes this instruction.
  - `accounts: <array[number]>` - List of ordered indices into the message.accountKeys array indicating which accounts to pass to the program.
  - `data: <string>` - The program input data encoded in a base-58 string.


##### Token Balances
```bash
"postTokenBalances": [
  {
    "accountIndex": 1,
    "mint": "6HvU8PbqP3nZLkFF59rr2zkTHqetPLgb6NnxKZLHQxNp",
    "owner": "DKypunNAGLPGBj3SocY8fF4ZrnDNVTf6QcUyW4trvkB",
    "programId": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
    "uiTokenAmount": {
      "amount": "0",
      "decimals": 2,
      "uiAmount": null,
      "uiAmountString": "0"
    }
  },
  {
    "accountIndex": 2,
    "mint": "6HvU8PbqP3nZLkFF59rr2zkTHqetPLgb6NnxKZLHQxNp",
    "owner": "8xm9beCpBH7SgqRz1mKua7KJF52whAVCiDEV1qREGHNV",
    "programId": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
    "uiTokenAmount": {
      "amount": "100",
      "decimals": 2,
      "uiAmount": 1.0,
      "uiAmountString": "1"
    }
  }
],

"preTokenBalances": [
  {
    "accountIndex": 1,
    "mint": "6HvU8PbqP3nZLkFF59rr2zkTHqetPLgb6NnxKZLHQxNp",
    "owner": "DKypunNAGLPGBj3SocY8fF4ZrnDNVTf6QcUyW4trvkB",
    "programId": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
    "uiTokenAmount": {
      "amount": "100",
      "decimals": 2,
      "uiAmount": 1.0,
      "uiAmountString": "1"
    }
  },
  {
    "accountIndex": 2,
    "mint": "6HvU8PbqP3nZLkFF59rr2zkTHqetPLgb6NnxKZLHQxNp",
    "owner": "8xm9beCpBH7SgqRz1mKua7KJF52whAVCiDEV1qREGHNV",
    "programId": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
    "uiTokenAmount": {
      "amount": "0",
      "decimals": 2,
      "uiAmount": null,
      "uiAmountString": "0"
    }
  }
]
```

The JSON structure of token balances is defined as a list of objects in the following structure:

- `accountIndex: <number>` - Index of the account in which the token balance is provided for.
- `mint: <string>` - Pubkey of the token's mint.
- `owner: <string|undefined>` - Pubkey of token balance's owner.
- `programId: <string|undefined>` - Pubkey of the Token program that owns the account.
- `uiTokenAmount: <object>` -
  - `amount: <string>` - Raw amount of tokens as a string, ignoring decimals.
  - `decimals: <number>` - Number of decimals configured for token's mint.
  - `uiAmount: <number|null>` - Token amount as a float, accounting for decimals. **DEPRECATED**
  - `uiAmountString: <string>` - Token amount as a string, accounting for decimals.