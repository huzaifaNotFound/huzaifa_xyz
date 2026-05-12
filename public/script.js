import { inject } from "https://cdn.jsdelivr.net/npm/@vercel/analytics/+esm";

inject()

const btn = document.querySelector("#refresh");

btn.addEventListener("click", () => {
  async function fetch1() {
    try {
      let req = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=inr&x_cg_demo_api_key=CG-Hpr3qxjPHCpw22KuXBWVudNm",
      );

      if (!req.ok) {
        throw new Error(`HTTP error: ${req.status}`);
      }

      const data = await req.json();
      return data;
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  }
  async function main() {
    let result = await fetch1();

    document.querySelector("#btc").innerText =
      result.bitcoin.inr.toLocaleString("en-IN");
    document.querySelector("#eth").innerText =
      result.ethereum.inr.toLocaleString("en-IN");
    document.querySelector("#status").innerText = "Fetched";
  }
  main();
});
