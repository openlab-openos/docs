---
title: Openverse RPC Websocket Methods
sidebar_label: Openverse RPC Websocket Methods
---

After connecting to the RPC PubSub websocket at `ws://<ADDRESS>/`:

- Submit subscription requests to the websocket using the methods below
- Multiple subscriptions may be active at once
- Many subscriptions take the optional `commitment` parameter, defining how finalized a change should be to trigger a notification. For subscriptions, if commitment is unspecified, the default value is `finalized`.

## RPC PubSub WebSocket Endpoint


Default port: `8900`

- ws://127.0.0.1:8546
- http://192.168.1.88:8899