import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForSelector("canvas");
await page.waitForTimeout(1000);

const rects = await page.evaluate(() => {
  const section = document.querySelector("section");
  const sticky = section?.querySelector(":scope > div");
  const canvas = document.querySelector("canvas");
  const getR = (el) => el ? el.getBoundingClientRect() : null;
  return {
    sectionRect: getR(section),
    stickyRect: getR(sticky),
    canvasRect: getR(canvas),
    stickyPosition: sticky ? getComputedStyle(sticky).position : null,
    mainOverflow: getComputedStyle(document.querySelector("main")).overflow,
  };
});
console.log(JSON.stringify(rects, null, 2));

await browser.close();
