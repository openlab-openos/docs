---
title: "Validator Guide: Troubleshooting"
sidebar_position: 4
sidebar_label: Troubleshooting
pagination_label: "Validator Guides: Troubleshooting"
---

There is a `#validator-support` Discord channel available to reach other
testnet participants, 

## Useful Links & Discussion

- [Network Explorer](http://scan.openverse.network//)


## Blockstore

The validator blockstore rocksdb database can be inspected using the `ldb` tool.
`ldb` is part of the `rocksdb` code base and is also available in the `rocksdb-tools`
package.

[RocksDB Administration and Data Access Tool](https://github.com/facebook/rocksdb/wiki/Administration-and-Data-Access-Tool)

## Upgrade

If a new software version introduces a new column family to the blockstore,
that new (empty) column will be automatically created. This is the same logic
that allows a validator to start fresh without the blockstore directory.

## Downgrade

If a new column family has been introduced to the validator blockstore, a
subsequent downgrade of the validator to a version that predates the new column
family will cause the validator to fail while opening the blockstore during
startup.

List column families:
```
ldb --db=<validator ledger path>/rocksdb/ list_column_families
```

**Warning**: Please seek guidance on discord before modifying the validator
blockstore.

Drop a column family:
```
ldb --db=<validator ledger path>/rocksdb drop_column_family <column family name>
```
