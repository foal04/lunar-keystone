# Lunar Keystone — Validation Guide

This document describes the validation steps maintainers should run before merging changes.

---

## What to Validate

### 1) Network configuration (`config/networks.json`)
- [ ] JSON parses correctly (no trailing commas, valid quotes)
- [ ] `base-mainnet.chainId` is `8453`
- [ ] `base-sepolia.chainId` is `84532`
- [ ] RPC URLs use HTTPS and are intended for public use
- [ ] `rpc.default` exists for each network
- [ ] `explorer.url` points to the correct BaseScan domain
- [ ] `defaults.network` is a valid key from `networks`

### 2) No secrets
- [ ] No API keys, tokens, or private RPC endpoints are committed
- [ ] If `.env` exists, it is ignored (or only `.env.example` is committed)

### 3) Dependency sanity
- [ ] Dependencies align with Base ecosystem usage
- [ ] No redundant libraries providing the same functionality
- [ ] Versions are compatible with TypeScript + the chosen build tool

---

## Quick Local Checks

Run these commands (if present in the repo):

```bash
npm install
npm run typecheck
npm run build
