import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForSelector("canvas");
await page.waitForTimeout(1000);

await page.mouse.wheel(0, 1000);
await page.waitForTimeout(800);

const rects = await page.evaluate(() => {
  const main = document.querySelector("main");
  const section = document.querySelector("section");
  const sticky = section?.querySelector(":scope > div");
  const getR = (el) => el ? el.getBoundingClientRect() : null;
  return {
    windowScrollY: window.scrollY,
    mainScrollTop: main.scrollTop,
    sectionRect: getR(section),
    stickyRect: getR(sticky),
  };
});
console.log(JSON.stringify(rects, null, 2));

await browser.close();
