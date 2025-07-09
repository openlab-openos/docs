---
title: How to Generate a Vanity Address
sidebar_label: How to Generate a Vanity Address
---

Vanity publickeys, or custom addresses, are keys that have start with specific characters.

For example, a person may want a publickey to start with elv1s, or maybe even cook. These can help other people remember who the key belongs to, making the key more easily identifiable.

**Note**: The more characters in your vanity address, the longer it will take.

You can generate a vanity address using the Openverse CLI:

```bash
openverse-keygen grind --starts-with e1v1s:1
```