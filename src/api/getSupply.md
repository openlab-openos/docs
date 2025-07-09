---
title: getSupply
sidebar_label: getSupply
---
# getSupply RPC Method

## 

Returns information about the current supply.

### params

>`object` `optional` Configuration object containing the following fields:

><details>
>  <summary>commitment</summary>
>
>   The commitment describes how finalized a block is at that point in time. See Configuring State Commitment.
>
></details>

><details>
>  <summary>excludeNonCirculatingAccountsList</summary>
>
>   Exclude non circulating accounts list from response
>
></details>

### result

>`object` The result will be a JSON object containing:

><details>
>  <summary>total</summary>
>
>   Total supply in lamports
>
></details>

><details>
>  <summary>circulating</summary>
>
>   Circulating supply in lamports
>
></details>

><details>
>  <summary>nonCirculating</summary>
>
>   Non-circulating supply in lamports
>
></details>

><details>
>  <summary>nonCirculatingAccounts</summary>
>
>   An array of account addresses of non-circulating accounts, as strings. If `excludeNonCirculatingAccountsList` is enabled, the returned array will be empty.
>
></details>

> **cURL**
> ```bash
>curl https://api.mainnet.openverse.network/ -s -X \
>  POST -H "Content-Type: application/json" -d ' 
>  {
>    "jsonrpc": "2.0",
>    "id": 1,
>    "method": "getSupply"
>  }
>'
>```


> **Response**
> ```bash
>{
>  "jsonrpc": "2.0",
>  "result": {
>    "context": { "apiVersion": "1.17.28","slot": 92399512 },
>    "value": {
>      "total": 108866443114145898,
>      "circulating": 108866443114145898,
>      "nonCirculating": 0,
>      "nonCirculatingAccounts": [
>				"GpxpMVhrBBBEYbEJxdR62w3daWz444V7m6dxYDZKH77D",
>				"BUnRE27mYXN9p8H1Ay24GXhJC88q2CuwLoNU2v2CrW4W",
>				"5q54XjQ7vDx4y6KphPeE97LUNiYGtP55spjvXAWPGBuf",
>				"CVgyXrbEd1ctEuvq11QdpnCQVnPit8NLdhyqXQHLprM2",
>				"GmyW1nqYcrw7P7JqrcyP9ivU9hYNbrgZ1r5SYJJH41Fs",
>				"6nN69B4uZuESZYxr9nrLDjmKRtjDZQXrehwkfQTKw62U",
>				"AVYpwVou2BhdLivAwLxKPALZQsY7aZNkNmGbP2fZw7RU",
>				"9S2M3UYPpnPZTBtbcUvehYmiWFK3kBhwfzV2iWuwvaVy",
>				"7cvkjYAkUYs4W8XcXsca7cBrEGFeSUjeZmKoNBvEwyri",
>				"8UVjvYyoqP6sqcctTso3xpCdCfgTMiv3VRh7vraC2eJk",
>				"8DE8fqPfv1fp9DHyGyDFFaMjpopMgDeXspzoi9jpBJjC",
>				"BhvLngiqqKeZ8rpxch2uGjeCiC88zzewoWPRuoxpp1aS",
>				"CuatS6njAcfkFHnvai7zXCs7syA9bykXWsDCJEWfhjHG",
>				"4sxwau4mdqZ8zEJsfryXq4QFYnMJSCp3HWuZQod8WU5k",
>				"9xbcBZoGYFnfJZe81EDuDYKUm8xGkjzW8z4EgnVhNvsv",
>				"5PLJZLJiRR9vf7d1JCCg7UuWjtyN9nkab9uok6TqSyuP",
>				"Mc5XB47H3DKJHym5RLa9mPzWv5snERsF3KNv5AauXK8",
>				"GumSE5HsMV5HCwBTv2D2D81yy9x17aDkvobkqAfTRgmo",
>				"FwfaykN7ACnsEUDHANzGHqTGQZMcGnUSsahAHUqbdPrz",
>				"Eyr9P5XsjK2NUKNCnfu39eqpGoiLFgVAv1LSQgMZCwiQ",
>				"7Y8smnoUrYKGGuDq2uaFKVxJYhojgg7DVixHyAtGTYEV",
>				"AsrYX4FeLXnZcrjcZmrASY2Eq1jvEeQfwxtNTxS5zojA",
>				"EziVYi3Sv5kJWxmU77PnbrT8jmkVuqwdiFLLzZpLVEn7",
>				"F9MWFw8cnYVwsRq8Am1PGfFL3cQUZV37mbGoxZftzLjN",
>				"9huDUZfxoJ7wGMTffUE7vh1xePqef7gyrLJu9NApncqA",
>				"AzVV9ZZDxTgW4wWfJmsG6ytaHpQGSe1yz76Nyy84VbQF",
>				"8rT45mqpuDBR1vcnDc9kwP9DrZAXDR4ZeuKWw3u1gTGa",
>				"63DtkW7zuARcd185EmHAkfF44bDcC2SiTSEj2spLP3iA",
>				"EAJJD6nDqtXcZ4DnQb19F9XEz8y8bRDHxbWbahatZNbL",
>				"Ep5Y58PaSyALPrdFxDVAdfKtVdP55vApvsWjb3jSmXsG",
>				"CUageMFi49kzoDqtdU8NvQ4Bq3sbtJygjKDAXJ45nmAi",
>				"7Np41oeYqPefeNQEHSv1UDhYrehxin3NStELsSKCT4K2",
>				"5khMKAcvmsFaAhoKkdg3u5abvKsmjUQNmhTNP624WB1F",
>				"6yKHERk8rsbmJxvMpPuwPs1ct3hRiP7xaJF2tvnGU6nK",
>				"nGME7HgBT6tAJN1f6YuCCngpqT5cvSTndZUVLjQ4jwA",
>				"HKJgYGTTYYR2ZkfJKHbn58w676fKueQXmvbtpyvrSM3N",
>				"Hm9JW7of5i9dnrboS8pCUCSeoQUPh7JsP1rkbJnW7An4",
>				"5D5NxsNVTgXHyVziwV7mDFwVDS6voaBsyyGxUbhQrhNW",
>				"EMAY24PrS6rWfvpqffFCsTsFJypeeYYmtUc26wdh3Wup",
>				"GK2zqSsXLA2rwVZk347RYhh6jJpRsCA69FjLW93ZGi3B",
>				"CQDYc4ET2mbFhVpgj41gXahL6Exn5ZoPcGAzSHuYxwmE",
>				"GvpCiTgq9dmEeojCDBivoLoZqc4AkbUDACpqPMwYLWKh",
>				"CzAHrrrHKx9Lxf6wdCMrsZkLvk74c7J2vGv8VYPUmY6v",
>				"FiWYY85b58zEEcPtxe3PuqzWPjqBJXqdwgZeqSBmT9Cn",
>				"8CUUMKYNGxdgYio5CLHRHyzMEhhVRMcqefgE6dLqnVRK",
>				"GpYnVDgB7dzvwSgsjQFeHznjG6Kt1DLBFYrKxjGU1LuD",
>				"3bTGcGB9F98XxnrBNftmmm48JGfPgi5sYxDEKiCjQYk3",
>				"8W58E8JVJjH1jCy5CeHJQgvwFXTyAVyesuXRZGbcSUGG",
>				"5smrYwb1Hr2T8XMnvsqccTgXxuqQs14iuE8RbHFYf2Cf",
>				"3o6xgkJ9sTmDeQWyfj3sxwon18fXJB9PV5LDc8sfgR4a",
>				"14FUT96s9swbmH7ZjpDvfEDywnAYy9zaNhv4xvezySGu",
>				"H3Ni7vG1CsmJZdTvxF7RkAf9UM5qk4RsohJsmPvtZNnu",
>				"Br3aeVGapRb2xTq17RU2pYZCoJpWA7bq6TKBCcYtMSmt",
>				"9hknftBZAQL4f48tWfk3bUEV5YSLcYYtDRqNmpNnhCWG",
>				"4vuWt1oHRqLMhf8Nv1zyEXZsYaeK7dipwrfKLoYU9Riq",
>				"BsKsunvENxAraBrL77UfAn1Gi7unVEmQAdCbhsjUN6tU",
>				"Fgyh8EeYGZtbW8sS33YmNQnzx54WXPrJ5KWNPkCfWPot",
>				"CTvhdUVf8KNyMbyEdnvRrBCHJjBKtQwkbj6zwoqcEssG",
>				"3fV2GaDKa3pZxyDcpMh5Vrh2FVAMUiWUKbYmnBFv8As3",
>				"4pV47TiPzZ7SSBPHmgUvSLmH9mMSe8tjyPhQZGbi1zPC",
>				"HbZ5FfmKWNHC7uwk6TF1hVi6TCs7dtYfdjEcuPGgzFAg",
>				"DUS1KxwUhUyDKB4A81E8vdnTe3hSahd92Abtn9CXsEcj",
>				"Dc2oHxFXQaC2QfLStuU7txtD3U5HZ82MrCSGDooWjbsv",
>				"DE1bawNcRJB9rVm3buyMVfr8mBEoyyu73NBovf2oXJsJ",
>				"HQJtLqvEGGxgNYfRXUurfxV8E1swvCnsbC3456ik27HY",
>				"5XdtyEDREHJXXW1CTtCsVjJRjBapAwK78ZquzvnNVRrV",
>				"AG3m2bAibcY8raMt4oXEGqRHwX4FWKPPJVjZxn1LySDX",
>				"2WWb1gRzuXDd5viZLQF7pNRR6Y7UiyeaPpaL35X6j3ve",
>				"P8aKfWQPeRnsZtpBrwWTYzyAoRk74KMz56xc6NEpC4J",
>				"CY7X5o3Wi2eQhTocLmUS6JSWyx1NinBfW7AXRrkRCpi8",
>				"CWeRmXme7LmbaUWTZWFLt6FMnpzLCHaQLuR2TdgFn4Lq",
>				"6o5v1HC7WhBnLfRHp8mQTtCP2khdXXjhuyGyYEoy2Suy",
>				"FR84wZQy3Y3j2gWz6pgETUiUoJtreMEuWfbg6573UCj9",
>				"BUjkdqUuH5Lz9XzcMcR4DdEMnFG6r8QzUMBm16Rfau96",
>				"GNiz4Mq886bTNDT3pijGsu2gbw6it7sqrwncro45USeB",
>				"HCV5dGFJXRrJ3jhDYA4DCeb9TEDTwGGYXtT3wHksu2Zr",
>				"8vqrX3H2BYLaXVintse3gorPEM4TgTwTFZNN1Fm9TdYs",
>				"7xJ9CLtEAcEShw9kW2gSoZkRWL566Dg12cvgzANJwbTr",
>				"6zw7em7uQdmMpuS9fGz8Nq9TLHa5YQhEKKwPjo5PwDK4",
>				"8pNBEppa1VcFAsx4Hzq9CpdXUXZjUXbvQwLX2K7QsCwb",
>				"H1rt8KvXkNhQExTRfkY8r9wjZbZ8yCih6J4wQ5Fz9HGP",
>				"Fg12tB1tz8w6zJSQ4ZAGotWoCztdMJF9hqK8R11pakog",
>				"Es13uD2p64UVPFpEWfDtd6SERdoNR2XVgqBQBZcZSLqW",
>				"Ab1UcdsFXZVnkSt1Z3vcYU65GQk5MvCbs54SviaiaqHb",
>				"E8jcgWvrvV7rwYHJThwfiBeQ8VAH4FgNEEMG9aAuCMAq",
>				"3iPvAS4xdhYr6SkhVDHCLr7tJjMAFK4wvvHWJxFQVg15",
>				"C7C8odR8oashR5Feyrq2tJKaXL18id1dSj2zbkDGL2C2",
>				"JCwT5Ygmq3VeBEbDjL8s8E82Ra2rP9bq45QfZE7Xyaq7",
>				"BuCEvc9ze8UoAQwwsQLy8d447C8sA4zeVtVpc6m5wQeS",
>				"GEWSkfWgHkpiLbeKaAnwvqnECGdRNf49at5nFccVey7c",
>				"Hz9nydgN1k15wnwffKX7CSmZp4VFTnTwLXAEdomFGNXy",
>				"CHmdL15akDcJgBkY6BP3hzs98Dqr6wbdDC5p8odvtSbq",
>				"DrKzW5koKSZp4mg4BdHLwr72MMXscd2kTiWgckCvvPXz",
>				"GLUmCeJpXB8veNcchPwibkRYwCwvQbKodex5mEjrgToi",
>				"GK8R4uUmrawcREZ5xJy5dAzVV5V7aFvYg77id37pVTK",
>				"8ndGYFjav6NDXvzYcxs449Aub3AxYv4vYpk89zRDwgj7",
>				"3jnknRabs7G2V9dKhxd2KP85pNWXKXiedYnYxtySnQMs",
>				"CsUqV42gVQLJwQsKyjWHqGkfHarxn9hcY4YeSjgaaeTd",
>				"GhsotwFMH6XUrRLJCxcx62h7748N2Uq8mf87hUGkmPhg",
>				"EMhn1U3TMimW3bvWYbPUvN2eZnCfsuBN4LGWhzzYhiWR",
>				"HuqDWJodFhAEWh6aWdsDVUqsjRket5DYXMYyDYtD8hdN",
>				"DQQGPtj7pphPHCLzzBuEyDDQByUcKGrsJdsH7SP3hAug",
>				"HUAkU5psJXZuw54Lrg1ksbXzHv2fzczQ9sNbmisVMeJU",
>				"3ZrsTmNM6AkMcqFfv3ryfhQ2jMfqP64RQbqVyAaxqhrQ",
>				"CND6ZjRTzaCFVdX7pSSWgjTfHZuhxqFDoUBqWBJguNoA",
>				"xQadXQiUTCCFhfHjvQx1hyJK6KVWr1w2fD6DT3cdwj7",
>				"3itU5ME8L6FDqtMiRoUiT1F7PwbkTtHBbW51YWD5jtjm",
>				"AzHQ8Bia1grVVbcGyci7wzueSWkgvu7YZVZ4B9rkL5P6",
>				"GdnSyH3YtwcxFvQrVVJMm1JhTS4QVX7MFsX56uJLUfiZ",
>				"CakcnaRDHka2gXyfbEd2d3xsvkJkqsLw2akB3zsN1D2S"
>      ]
>    }
>  },
>  "id": 1
>}
>```
