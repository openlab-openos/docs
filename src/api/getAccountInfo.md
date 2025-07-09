---
title: getAccountInfo
sidebar_label: getAccountInfo
---
# getAccountInfo RPC Method
## 

Returns all information associated with the account of provided Pubkey

### params


 `string`  `required` Pubkey of account to query, as base-58 encoded string. 


 `object`  `optiona` Configuration object.
   <details>
    <summary>commitment</summary>
    The commitment describes how finalized a block is at that point in time.See [Configuring State Commitment](../Documentation.md).
  </details>

  <details>
  <summary>encoding</summary>


- Values: `base58` `base64` `base64+zstd` `jsonParsed`
-  Default: 

</details>

  <details>
  <summary>Encoding format for Account data. See Parsed Responses.</summary>

- `base58` is slow and limited to less than 129 bytes of Account data.
- `base64` will return base64 encoded data for Account data of any size.
- `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data.
- If `jsonParsed` is requested but a parser cannot be found, the field falls back to `base64` encoding, detectable when the data field is type `string`.

</details>

  <details>
  <summary>dataSlice</summary>

- Request a slice of the account's data.
  - `length: <usize>` - number of bytes to return
  - `offset: <usize>` - byte offset from which to start reading

</details>

  <details>
  <summary>minContextSlot</summary>

 The minimum slot that the request can be evaluated at.

</details>

### result

`object | nullIf` the requested account doesn't exist result will be `null`. Otherwise, an object containing:

<details>
  <summary>lamports</summary>

    Number of lamports assigned to this account
</details>

<details>
  <summary>owner</summary>

  base-58 encoded Pubkey of the program this account has been assigned to
</details>

<details>
  <summary>data</summary>

  Data associated with the account, either as encoded binary data or JSON format `{<program>: <state>}` - depending on encoding parameter.
</details>

<details>
  <summary>executable</summary>

  Boolean indicating if the account contains a program (and is strictly read-only)
</details>

<details>
  <summary>rentEpoch</summary>

  The epoch at which this account will next owe rent, as u64
</details>

<details>
  <summary>space</summary>

  The data size of the account
</details>

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getAccountInfo",
>    "params": [
>      "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
>     {
>        "encoding": "base64"
>      }
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>	"jsonrpc": "2.0",
>	"result": {
>		"context": {
>			"apiVersion": "1.17.28",
>			"slot": 92362494
>		},
>		"value": {
>			"data": [
				"AQAAAA2f6qSxu2xF4QquYSBvmBF0ye2MyD0uhxoJjmQnhTE0AABkp7O24A0JAQEAAAANn+qksbtsReEKrmEgb5gRdMntjMg9LocaCY5kJ4UxNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARIAQAANn+qksbtsReEKrmEgb5gRdMntjMg9LocaCY5kJ4UxNJ9PphOUBT9c2h3rJeEhPAb3iHWDy5a3CBUC26vuogL+EwCWAA2f6qSxu2xF4QquYSBvmBF0ye2MyD0uhxoJjmQnhTE0n0+mE5QFP1zaHesl4SE8BveIdYPLlrcIFQLbq+6iAv4QAAAAQml0Y29pbi5UTSBUb2tlbgMAAABCSVQzAAAAaHR0cHM6Ly9jZG4ub3BlbnZlcnNlLmxpdmUvaW1hZ2VzL0JJVF8xMDI0eDEwMjQucG5nAAAAAA==",
>				"base64"
>			],
>			"executable": false,
>			"lamports": 3591360,
>			"owner": "Token9ADbPtdFC3PjxaohBLGw2pgZwofdcbj6Lyaw6c",
>			"rentEpoch": 0,
>			"space": 388
>		}
>	},
>	"id": 1
>}
>```
