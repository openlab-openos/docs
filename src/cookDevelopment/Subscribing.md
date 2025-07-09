---
title: Subscribing to Events
sidebar_label: Subscribing to Events
---

Websockets provide a pub/sub interface where you can listen for certain events. Instead of pinging a typical HTTP endpoint at an interval to get frequent updates, you can instead receive those updates only when they happen.

> ```bash
>
>Openverse's web3 Connection under the hood generates a websocket endpoint and registers a websocket client when you create a new Connection instance (see source code here).
>
>The Connection class exposes pub/sub methods - they all start with on, like event emitters. When you call these listener methods, it registers a new subscription to the websocket client of that Connection instance. The example pub/sub method we use below is onAccountChange. The callback will provide the updated state data through arguments (see AccountChangeCallback as an example).
>
>
>
>import { clusterApiUrl, Connection, Keypair } from "openverse-web3";
>
>(async () => {
>  // Establish new connect to devnet - websocket client connected to devnet will also be registered here
>  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
>
>  // Create a test wallet to listen to
>  const wallet = Keypair.generate();
>
>  // Register a callback to listen to the wallet (ws subscription)
>  connection.onAccountChange(
>    wallet.publicKey,
>    (updatedAccountInfo, context) =>
>      console.log("Updated account info: ", updatedAccountInfo),
>    "confirmed",
>  );
>})();
>```