const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  // organize section: top=6408, height=2700 (300vh at 900px viewport)
  const start = 6408;
  const positions = [0, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700];

  for (const offset of positions) {
    await page.evaluate((y) => window.scrollTo(0, y), start + offset);
    await page.waitForTimeout(400);
    await page.screenshot({ path: `scratch_shot_${offset}.png` });
    console.log("captured", offset);
  }

  await browser.close();
})();
