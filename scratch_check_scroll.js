const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  const height = await page.evaluate(() => document.body.scrollHeight);
  console.log("document height:", height);

  const sections = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("section")).map((s, i) => ({
      i,
      id: s.id,
      top: s.getBoundingClientRect().top + window.scrollY,
      height: s.getBoundingClientRect().height,
      className: s.className.slice(0, 100),
    }));
  });
  console.log(JSON.stringify(sections, null, 2));

  await browser.close();
})();
