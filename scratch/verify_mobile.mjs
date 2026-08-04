import { chromium } from "playwright";

const shotDir = String.raw`C:\Users\ANANTH~1\AppData\Local\Temp\claude\c--Users-AnanthapadmanabhanG-Desktop-New-folder--2-\44834a64-d517-4432-8ee0-5eddcbf4b3ec\scratchpad`;

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

const consoleErrors = [];
page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
page.on("pageerror", (err) => consoleErrors.push("PAGEERROR: " + err.message));

await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
await page.waitForSelector("canvas");
await page.waitForTimeout(1200);
await page.screenshot({ path: `${shotDir}/mobile_0_top.png` });

await page.mouse.wheel(0, 900);
await page.waitForTimeout(700);
await page.screenshot({ path: `${shotDir}/mobile_1_scroll.png` });

console.log("MOBILE CONSOLE ERRORS:", JSON.stringify(consoleErrors, null, 2));
await browser.close();
