const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  page.on("console", (msg) => console.log("CONSOLE:", msg.type(), msg.text()));
  page.on("pageerror", (err) => console.log("PAGEERROR:", err.message));

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  // Try to read Next.js dev overlay error content if present
  const overlayText = await page.evaluate(() => {
    const el = document.querySelector("nextjs-portal");
    return el ? el.shadowRoot?.textContent?.slice(0, 3000) : null;
  });
  console.log("OVERLAY:", overlayText);

  await browser.close();
})();
