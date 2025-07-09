---
title: getIdentity
sidebar_label: getIdentity
---
# getIdentity RPC Method

## 

Returns the identity pubkey for the current node

### params

None


### result

>`object` The result field will be a JSON object with the following fields:
><details>
>  <summary>identity</summary>
>
>   The identity pubkey of the current node (as a base-58 encoded string)
>
></details>



> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getIdentity"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
> "result": {
>    "identity": "6GBmihwLezPWT8cPQVXRhcRYQLCDJpz4nvoGa8sAi74C"
>  },
>  "id": 1
>}
>```
