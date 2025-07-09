---
title: getRecentPerformanceSamples
sidebar_label: getRecentPerformanceSamples
---
# getRecentPerformanceSamples RPC Method

## 

Returns a list of recent performance samples, in reverse slot order. Performance samples are taken every 60 seconds and include the number of transactions and slots that occur in a given time window.

### params

>`usize` `optional` Number of samples to return (maximum 720)

### result

>`array` An array of performance sample objects containing:


><details>
>  <summary>slot</summary>
>
>   Slot in which sample was taken at
>
></details>

><details>
>  <summary>numTransactions</summary>
>
>   Number of transactions processed during the sample period
>
></details>

><details>
>  <summary>numSlots</summary>
>
>  Number of slots completed during the sample period
>
></details>

><details>
>  <summary>samplePeriodSecs</summary>
>
>   Number of seconds in a sample window
>
></details>

><details>
>  <summary>numNonVoteTransactions</summary>
>
>   Number of non-vote transactions processed during the sample period
>
></details>


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getRecentPerformanceSamples",
>    "params": [
>      2
>    ]
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": [
>    {
>      "slot": 92391105,
>      "numTransactions": 10045,
>      "numSlots": 158,
>     "samplePeriodSecs": 60,
>      "numNonVoteTransactions": 0
>    },
>   {
>      "slot": 92390947,
>      "numTransactions": 10085,
>      "numSlots": 160,
>      "samplePeriodSecs": 60,
>      "numNonVoteTransactions": 0
>    }
>  ],
>  "id": 1
>}
>```
