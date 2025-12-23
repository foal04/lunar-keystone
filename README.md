# Lunar Keystone (Built for Base)

Lunar Keystone is a minimal Base-focused reference repository that validates network identity (chainId 8453 / 84532) and exposes read-only blockchain data using Coinbase Wallet SDK and Base RPC endpoints.

---

## Repository layout

- app.lunar-keystone.ts  
  Browser entry script providing wallet connection and read-only RPC queries.

- contracts/  
  Solidity contracts deployed to Base Sepolia for testnet validation:
  - imports.sol — A Solidity contract focused on importing external code. 
  - mapping.sol — simple interaction test contract that enables fast lookup by key
 
- config/networks.json  
  Static configuration defining Base networks, chainIds, RPC URLs, and explorer links.

- docs/validation.md  
  Internal documentation describing validation steps and testnet checks.

- package.json  
  Dependency manifest referencing Coinbase SDKs and multiple Base repositories.

- README.md  
  Technical documentation and deployment records.

---

## Base network context

Base Mainnet  
chainId (decimal): 8453  
Explorer: https://basescan.org  

Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

---

## Capabilities

- Coinbase Wallet connection  
- Base chainId validation  
- ETH balance inspection  
- Latest block metadata  
- Basescan links for verification  

All interactions are strictly read-only.

---

## License

MIT License  
Copyright (c) 2025 YOUR_NAME

---

## Author

GitHub: https://github.com/foal04  

Email: foal04.bugs@icloud.com 

---

## Testnet Deployment (Base Sepolia)

As part of pre-production validation, one or more contracts may be deployed to the Base Sepolia test network to confirm correct behavior and tooling compatibility.

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

Contract imports.sol address:  
0xaec434146df511a1feb6a7063ff5877c62c42f92

Deployment and verification:
- https://sepolia.basescan.org/address/0xaec434146df511a1feb6a7063ff5877c62c42f92
- https://sepolia.basescan.org/0xaec434146df511a1feb6a7063ff5877c62c42f92/0#code  

Contract mapping.sol address:  
0xa78525e870ed78965e490f732b4922d35865b101 

Deployment and verification:
- https://sepolia.basescan.org/address/0xa78525e870ed78965e490f732b4922d35865b101 
- https://sepolia.basescan.org/0xa78525e870ed78965e490f732b4922d35865b101/0#code  

These testnet deployments provide a controlled environment for validating Base tooling, account abstraction flows, and read-only onchain interactions prior to Base Mainnet usage.
