---
title: How to Calculate Account Creation Cost
sidebar_label: How to Calculate Account Creation Cost
---

Keeping accounts alive on Openverse incurs a data storage cost called rent. For the calculation, you need to consider the amount of data you intend to store in the account. Rent can be reclaimed in full if the account is closed.

> ```bash
>
>import { Connection, clusterApiUrl } from "openverse-web3";
>
>const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
>
>// allocate 1.5k bytes of extra space in the account for data
>const space = 1500;
>
>const lamports = await connection.getMinimumBalanceForRentExemption(space);
>console.log("Minimum balance for rent exemption:", lamports);
>```