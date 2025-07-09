---
title: getClusterNodes
sidebar_label: getClusterNodes
---
# getClusterNodes RPC Method





## 

Returns information about all the nodes participating in the cluster

### params

None

### result

>`array` The result field will be an array of JSON objects, each with the following sub fields:
><details>
>  <summary>pubkey</summary>
>
>   Node public key, as base-58 encoded string
>
></details>
><details>
>  <summary>gossip</summary>
>
>   Gossip network address for the node
>
></details>
><details>
>  <summary>tpu</summary>
>
>   TPU network address for the node
>
></details>
><details>
>  <summary>rpc</summary>
>
>   JSON RPC network address for the node, or null if the JSON RPC service is not enabled
>
></details>
><details>
>  <summary>version</summary>
>
>   The software version of the node, or null if the version information is not available
>
></details>
><details>
>  <summary>featureSet</summary>
>
>   The unique identifier of the node's feature set
>
></details>
><details>
>  <summary>shredVersion</summary>
>
>   The shred version the node has been configured to use
>
></details>


> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getClusterNodes"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
> "result": [
>   {
>      "featureSet": 3746964731,
>      "gossip": "85.239.234.30:8001",
>      "pubkey": "6GBmihwLezPWT8cPQVXRhcRYQLCDJpz4nvoGa8sAi74C",
>      "pubsub": "85.239.234.30:8900",
>     "rpc": "85.239.234.30:8899",
>     "shredVersion": 13951,
>      "tpu": "85.239.234.30:8003",
>      "tpuQuic": "85.239.234.30:8009",
>      "version": "1.17.28"
>    }
>  ],
>  "id": 1
>}
>```
