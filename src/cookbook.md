---
title: Openverse Cookbook
sidebar_label: Openverse Cookbook
---

The Openverse Cookbook is a developer resource that provides examples and references for building applications on Openverse. Each example and reference will focus on specific aspects of Openverse development while providing additional details and usage examples.

## Development Guides

Development guides help developers set up and interact with the Openverse ecosystem using various tools and clients.

| Guide | Client | Description
| :---- | :----------: | :------------: 
| How to Start a Local Validator | Openverse CLI | Set up and run a local Openverse validator 
| Connecting to a Openverse Environment | JavaScript | Connect to different Openverse networks 
| Getting Test BTG | JavaScript | Obtain BTG tokens for testing 
| Subscribing to Events | JavaScript | Listen to Openverse program events 
| Using Mainnet Accounts and Programs | Openverse CLI | Work with production accounts and programs

## Wallet Management

Learn how to create, restore, and manage Openverse wallets using various tools and libraries.

| Guide | Client | Description
| :---- | :----------: | :------------: 
| How to Create a Keypair |	JavaScript |	Generate new Openverse keypairs
| How to Restore a Keypair |	JavaScript |	Recover existing keypairs
| How to Verify a Keypair |	JavaScript	 | Validate keypair authenticity
| How to Validate a Public Key |	JavaScript |	Check public key validity
| How to Generate Mnemonics for Keypairs |	bip39 |	Create seed phrases
| How to Restore a Keypair from a Mnemonic |	JavaScript, bip39 |	Recover keypairs using seed phrases
| How to Generate a Vanity Address |	Openverse CLI |	Create custom addresses
| How to Sign and Verify a Message |	JavaScript |	Message signing and verification
| How to Connect a Wallet with React |	React, JavaScript |	Integrate wallets in React apps

## Transaction Operations

Explore various transaction-related operations on the Openverse blockchain.

| Guide | Client | Description
| :---- | :----------: | :------------: 
| How to Send BTG |	JavaScript |	Transfer BTG between accounts
| How to Send Tokens |	JavaScript |	Transfer SPL tokens
| How to Calculate Transaction Cost |	JavaScript	 | Estimate transaction fees
| How to Add a Memo to a Transaction|	JavaScript |	Include memos in transactions
| How to Add Priority Fees to a Transaction |	JavaScript |	Set transaction priorities
| How to Optimize Compute Requested |	JavaScript |	Improve transaction efficiency
| Offline Transactions |	JavaScript |	Handle offline operations

## Account Management

Learn how to manage Openverse accounts effectively.

| Guide | Client | Description
| :---- | :----------: | :------------: 
| How to Create an Account |	JavaScript |	Create new Openverse accounts
| How to Calculate Account Creation Cost |	JavaScript |	Estimate account costs
| How to Create a PDA's Account |	JavaScript,Rust	 | Work with PDAs
| How to Sign with a PDA's Account|	Rust |	PDA signing operations
| How to Close an Account |	Rust |	Remove accounts
| How to Get Account Balance |	JavaScript |	Check account balances

## Program Development

Develop Openverse programs with these comprehensive guides.

| Guide | Client | Description
| :---- | :----------: | :------------: 
| How to Transfer BTG in a Openverse Program |	Rust |	Program-based BTG transfers
| How to Get Clock in a Program |	Rust |	Access program clock
| How to Change Account Size |	Rust	 | 	Modify account sizes
| How to Do Cross Program Invocation|	Rust |		Modify account sizes
| How to Create a Program Derived Address |	Rust |		Modify account sizes
| How to Read Accounts in a Program |	Rust |	Account data access
| Reading Multiple Instructions |	Rust |	Handle multiple instructions
| How to Verify Accounts in a Openverse Program |	Rust |	Account verification

## Token Operations

Comprehensive guides for working with tokens on Openverse.

| Guide | Client | Description
| :---- | :----------: | :------------: 
| How to Create a Token |	JavaScript |	Create new tokens
| How to Get a Token Mint |	JavaScript |	Access token mints
| How to Create a Token Account |	JavaScript |	Set up token accounts
| How to Get a Token Account |	JavaScript |	Retrieve token accounts
| How to Get a Token Account's Balance |	JavaScript, Rust |	Check token balances
| How to Mint Tokens |	JavaScript, Rust |	Create new tokens
| How to Transfer Tokens |	JavaScript |		Move tokens between accounts
| How to Burn Tokens |	JavaScript |		Remove tokens from circulation
| How to Close Token Accounts |	JavaScript |	Clean up token accounts
| How to Set Authority on Token Accounts or Mints |	JavaScript |	Manage token permissions
| How to Delegate Token Accounts |	JavaScript |	Set up token delegation
| How to Revoke a Token Delegate |	JavaScript |	Remove delegates
| How to Use Wrapped BTG |	JavaScript |	Work with wrapped SOL
| How to Get All Token Accounts by Authority |	JavaScript |	List token accounts
| How to Create an NFT |	JavaScript |	Mint NFTs
| How to Fetch the NFT Metadata |	JavaScript |	Fetch NFT metadata
| How to Get the Owner of an NFT |	JavaScript |	Find NFT ownership
| How to Get All NFTs from a Wallet |	JavaScript |	List wallet NFTs