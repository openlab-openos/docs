---
title: getTransaction
sidebar_label: getTransaction
---
# getTransaction RPC Method

## 

Returns transaction details for a confirmed transaction

### params

>`string` `required` Transaction signature, as base-58 encoded string
>`object` `optional` Configuration object containing the following fields:

><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>
>
><details>
>  <summary>maxSupportedTransactionVersion</summary>
>
>   Set the max transaction version to return in responses. If the requested transaction is a higher version, an error will be returned. If this parameter is omitted, only legacy transactions will be returned, and any versioned transaction will prompt the error.
>
></details>
>
><details>
>  <summary>encoding</summary>
>
>   Values: `json`, `jsonParsed`, `base64`, `base58`
>   Default: `json`
>
>   Encoding for the returned Transaction
>
>   - `jsonParsed` encoding attempts to use program-specific state parsers to return more human-readable and explicit data in the `transaction.message.instructions` list.
>   - If `jsonParsed` is requested but a parser cannot be found, the instruction falls back to regular JSON encoding (`accounts`, `data`, and `programIdIndex` fields).
>
></details>

### result

>`object | null`Returns `null` if transaction is not found or not confirmed, otherwise returns an object containing:

>
><details>
>  <summary>slot</summary>
>
>   The slot this transaction was processed in
>
></details>
>
><details>
>  <summary>blockTime</summary>
>
>   Estimated production time, as Unix timestamp (seconds since the Unix epoch) of when the transaction was processed. null if not available
>
></details>
>
><details>
>  <summary>meta</summary>
>
>   Transaction status metadata object or `null`.
>
></details>
>
><details>
>  <summary>transaction</summary>
>
>   Transaction object, either in JSON format or encoded binary data, depending on encoding parameter
>
></details>
>
><details>
>  <summary>version</summary>
>
>   Transaction version. Undefined if `maxSupportedTransactionVersion` is not set in request params.
>
></details>




> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getTransaction",
>    "params": [
>      "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv",
>      "json"
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>	"jsonrpc": "2.0",
>	"result": {
>		"blockTime": 1751958576,
>		"meta": {
>			"computeUnitsConsumed": 0,
>			"err": null,
>			"fee": 10000,
>			"innerInstructions": [],
>			"loadedAddresses": {
>				"readonly": [],
>				"writable": []
>			},
>			"logMessages": [
>				"Program 11111111111111111111111111111111 invoke [1]",
>				"Program 11111111111111111111111111111111 success",
>				"Program Stake11111111111111111111111111111111111111 invoke [1]",
>				"Program Stake11111111111111111111111111111111111111 success",
>				"Program Stake11111111111111111111111111111111111111 invoke [1]",
>				"Program Stake11111111111111111111111111111111111111 success"
>			],
>			"postBalances": [
>				1211295640,
>				10000000,
>				1,
>				216074949587107,
>				1,
>				960480,
>				1169280,
>				1009200,
>				114979200
>			],
>			"postTokenBalances": [],
>			"preBalances": [
>				1221305640,
>				0,
>				1,
>				216074949587107,
>				1,
>				960480,
>				1169280,
>				1009200,
>				114979200
>			],
>			"preTokenBalances": [],
>			"rewards": [],
>			"status": {
>				"Ok": null
>			}
>		},
>		"slot": 93081046,
>		"transaction": {
>			"message": {
>				"accountKeys": [
>					"2y2brwJpEJrLgV34gPQhHhaHswjsQFexUTGM13y5j9HB",
>					"7hu6dyFXP1eqibrfKyWo99pbuaijKyjx9gxueGYKiHHn",
>					"11111111111111111111111111111111",
>					"EeFzUXHpVYggvcEyfoo2BNTmtV9oqJzxUMXq79LrEVcU",
>					"Stake11111111111111111111111111111111111111",
>					"StakeConfig11111111111111111111111111111111",
>					"SysvarC1ock11111111111111111111111111111111",
>					"SysvarRent111111111111111111111111111111111",
>					"SysvarStakeHistory1111111111111111111111111"
>				],
>				"header": {
>					"numReadonlySignedAccounts": 0,
>					"numReadonlyUnsignedAccounts": 7,
>					"numRequiredSignatures": 2
>				},
>				"instructions": [
>					{
>						"accounts": [
>							0,
>							1
>						],
>						"data": "11115ian4JmMBBzGfjQDJGTF2d8iMswGJxpnRahYCKcc3r3YaHHJtYKzs9rs7NQPmFVCfR",
>						"programIdIndex": 2,
>						"stackHeight": null
>					},
>					{
>						"accounts": [
>							1,
>							7
>						],
>						"data": "11116V6UKjkYNXGvS4naSmf8nkWyURspK1ZFhSbu6LWQ5zRGLnKpephYoMrZ6aPGUgNytc3SJb2nVTXu4TEPneBnakQbYyhmMyACiYrrcGUKb39iLfZsNt7xdbVVPzF2pUVqBQtte5BPF1VYd4npiV7UezTDb",
>						"programIdIndex": 4,
>						"stackHeight": null
>					},
>					{
>						"accounts": [
>							1,
>							3,
>							6,
>							8,
>							5,
>							0
>						],
>						"data": "3xyZh",
>						"programIdIndex": 4,
>						"stackHeight": null
>					}
>				],
>				"recentBlockhash": "Hmm4kSgbrX54uGqzFccLqcUfC4h9eKqQDzASGZVUwWtH"
>			},
>			"signatures": [
>				"2ZdnEJp9qNxaVDm4QWazapvukybFbEQNRHF1Mv3p1GR8RfwavWy4GCWp6Y7W8rHAs1DcA36ePJkaYy2k9sQXtMiy",
>				"5rGhFzpSFyd9ifAhzayW3batA1mbLJYfxdcCJPNXrRLHjbAVFSKMUU44oyjoaQ1dubZosyY1PkFmT8LsJvrTqdLe"
>			]
>		}
>	},
>	"id": 1
>}
>```
