import { chromium } from "playwright";

const shotDir = "C:\\Users\\ANANTH~1\\AppData\\Local\\Temp\\claude\\c--Users-AnanthapadmanabhanG-Desktop-New-folder--2-\\44834a64-d517-4432-8ee0-5eddcbf4b3ec\\scratchpad";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const consoleErrors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});
page.on("pageerror", (err) => consoleErrors.push("PAGEERROR: " + err.message));

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForSelector("canvas");
await page.waitForTimeout(1500);

await page.screenshot({ path: `${shotDir}/hero_0_top.png` });

const scrollSteps = [400, 900, 1400, 1900, 2400];
for (let i = 0; i < scrollSteps.length; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollSteps[i]);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${shotDir}/hero_${i + 1}_scroll_${scrollSteps[i]}.png` });
}

console.log("CONSOLE ERRORS:", JSON.stringify(consoleErrors, null, 2));

await browser.close();
