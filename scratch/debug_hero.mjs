import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForSelector("canvas");
await page.waitForTimeout(1000);

const info1 = await page.evaluate(() => ({
  bodyHeight: document.body.scrollHeight,
  scrollY: window.scrollY,
  htmlOverflow: getComputedStyle(document.documentElement).overflow,
}));
console.log("before scroll:", info1);

await page.mouse.wheel(0, 1000);
await page.waitForTimeout(800);

const info2 = await page.evaluate(() => ({
  scrollY: window.scrollY,
}));
console.log("after wheel:", info2);

await page.screenshot({ path: "scratch/debug_after_wheel.png" });

await browser.close();
