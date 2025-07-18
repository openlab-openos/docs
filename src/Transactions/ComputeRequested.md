---
title: How to Optimize Compute Requested
sidebar_label: How to Optimize Compute Requested
---

Optimizing the Compute Requested on a transaction is important to ensure that the transaction is both processed in a timely manner as well as to avoid paying too much in priority fees.

For more information about requesting optimal compute, check out the full guide. You can also find more information about using priority fees in this detailed guide.

> ```bash
>
>// import { ... } from "openverse-web3"
>
>async function buildOptimalTransaction(
>  connection: Connection,
>  instructions: Array<TransactionInstruction>,
>  signer: Signer,
>  lookupTables: Array<AddressLookupTableAccount>,
>) {
>  const [microLamports, units, recentBlockhash] = await Promise.all([
>    100 /* Get optimal priority fees - https://solana.com/developers/guides/advanced/how-to-use-priority-fees*/,
>    getSimulationComputeUnits(
>      connection,
>      instructions,
>      signer.publicKey,
>      lookupTables,
>    ),
>    connection.getLatestBlockhash(),
>  ]);
>
>  instructions.unshift(
>    ComputeBudgetProgram.setComputeUnitPrice({ microLamports }),
 > );
>  if (units) {
>    // probably should add some margin of error to units
>    instructions.unshift(ComputeBudgetProgram.setComputeUnitLimit({ units }));
>  }
>  return {
>    transaction: new VersionedTransaction(
>      new TransactionMessage({
>        instructions,
>        recentBlockhash: recentBlockhash.blockhash,
>        payerKey: signer.publicKey,
>      }).compileToV0Message(lookupTables),
>    ),
>    recentBlockhash,
>  };
>}
>```