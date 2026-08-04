const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  // Click the "2 Issues" badge to expand it
  const clicked = await page.evaluate(() => {
    const portal = document.querySelector("nextjs-portal");
    if (!portal || !portal.shadowRoot) return "no portal";
    const btn = portal.shadowRoot.querySelector('[data-nextjs-dev-tools-button]') ||
      portal.shadowRoot.querySelector("button");
    if (btn) {
      btn.click();
      return "clicked";
    }
    return "no button found";
  });
  console.log("click result:", clicked);
  await page.waitForTimeout(500);

  const text = await page.evaluate(() => {
    const portal = document.querySelector("nextjs-portal");
    return portal && portal.shadowRoot ? portal.shadowRoot.textContent : null;
  });

  // Extract likely error message substrings
  console.log("LENGTH:", text ? text.length : 0);
  if (text) {
    const idx = text.indexOf("Error");
    console.log(text.slice(Math.max(0, idx - 200), idx + 1500));
  }

  await page.screenshot({ path: "scratch_overlay.png", fullPage: false });

  await browser.close();
})();
