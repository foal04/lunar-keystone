import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { createPublicClient, http, formatEther } from "viem";
import { base, baseSepolia } from "viem/chains";

const NETWORKS = {
  sepolia: {
    chain: baseSepolia,
    chainId: 84532,
    rpc: "https://sepolia.base.org",
    explorer: "https://sepolia.basescan.org",
    label: "Base Sepolia",
  },
  mainnet: {
    chain: base,
    chainId: 8453,
    rpc: "https://mainnet.base.org",
    explorer: "https://basescan.org",
    label: "Base Mainnet",
  },
};

let active = NETWORKS.sepolia;

const sdk = new CoinbaseWalletSDK({
  appName: "Lunar Keystone (Built for Base)",
  appLogoUrl: "https://base.org/favicon.ico",
});

const out = document.createElement("pre");
out.style.padding = "14px";
out.style.background = "#0b0f1a";
out.style.color = "#dbe7ff";
out.style.borderRadius = "12px";
out.style.minHeight = "280px";

function print(lines: string[]) {
  out.textContent = lines.join("\n");
}

function client() {
  return createPublicClient({
    chain: active.chain,
    transport: http(active.rpc),
  });
}

async function connect() {
  const provider = sdk.makeWeb3Provider(active.rpc, active.chainId);
  const accounts = (await provider.request({ method: "eth_requestAccounts" })) as string[];
  const address = accounts[0];
  const bal = await client().getBalance({ address });
  print([
    `Network: ${active.label}`,
    `chainId: ${active.chainId}`,
    `Address: ${address}`,
    `ETH: ${formatEther(bal)}`,
    `${active.explorer}/address/${address}`,
  ]);
}

async function latestBlock() {
  const b = await client().getBlock();
  print([
    `Network: ${active.label}`,
    `Block: ${b.number}`,
    `Timestamp: ${b.timestamp}`,
    `${active.explorer}/block/${b.number}`,
  ]);
}

function toggle() {
  active = active.chainId === 84532 ? NETWORKS.mainnet : NETWORKS.sepolia;
  print([`Switched to ${active.label}`]);
}

function mount() {
  const root = document.createElement("div");
  root.style.maxWidth = "960px";
  root.style.margin = "24px auto";
  root.style.fontFamily = "system-ui";

  const h1 = document.createElement("h1");
  h1.textContent = "Lunar Keystone";

  const btnConnect = document.createElement("button");
  btnConnect.textContent = "Connect Wallet";
  btnConnect.onclick = () => connect();

  const btnBlock = document.createElement("button");
  btnBlock.textContent = "Latest Block";
  btnBlock.onclick = () => latestBlock();

  const btnToggle = document.createElement("button");
  btnToggle.textContent = "Toggle Network";
  btnToggle.onclick = () => toggle();

  root.append(h1, btnConnect, btnBlock, btnToggle, out);
  document.body.appendChild(root);

  print(["Ready", `Active: ${active.label}`]);
}

mount();
