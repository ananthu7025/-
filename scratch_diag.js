const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  // Scroll to middle of organize section
  await page.evaluate(() => window.scrollTo(0, 6408 + 1200));
  await page.waitForTimeout(500);

  const info = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    const organizeSection = sections[5];
    const canvases = document.querySelectorAll("canvas");
    const canvasInfo = Array.from(canvases).map((c) => ({
      width: c.width,
      height: c.height,
      styleWidth: c.style.width,
      styleHeight: c.style.height,
      rectTop: c.getBoundingClientRect().top,
      rectHeight: c.getBoundingClientRect().height,
      parentRect: c.parentElement?.getBoundingClientRect(),
    }));
    return {
      organizeSectionRect: organizeSection?.getBoundingClientRect(),
      canvasCount: canvases.length,
      canvasInfo,
      scrollY: window.scrollY,
    };
  });
  console.log(JSON.stringify(info, null, 2));

  await browser.close();
})();
