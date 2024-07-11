const { chromium } = require('playwright');
const browser = await chromium.launch()
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()

await page.goto('https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/zohomail-pricing.html&serviceurl=https://mail.zoho.com')

await page.setViewportSize({ width: 1374, height: 880 })

await page.waitForSelector('#login_id')
await page.click('#login_id')

await page.waitForSelector('#password')
await page.click('#password')

await page.waitForSelector('#nextbtn')
await page.click('#nextbtn')

await navigationPromise

await browser.close()
