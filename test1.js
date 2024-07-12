const puppeteer = require('puppeteer');
const init = async () => {
  // 启动浏览器
  const browser = await puppeteer.launch({
    headless: false, // 是否以无头模式运行，默认为 true，除非选择开启了开发者工具
    devtools: true, // 是否自动打开开发者工具，默认为 false
    args: ["--start-maximized"], // 启动时传递给浏览器的额外参数
  });
const page = await browser.newPage();
  // 跳转到相应的网站
  await page.goto('https://www.zoho.com/mail/');
  await page.waitForSelector('.header > #header > .zgh-utilities > .zgh-accounts > .zgh-login')
  await page.click('.header > #header > .zgh-utilities > .zgh-accounts > .zgh-login')

   // 输入账户
await page.type('#login_id', 'lixiaohu44@zoho.com');
await page.waitForSelector('#nextbtn')
await page.click('#nextbtn')


await page.waitForSelector('#nextbtn')
await page.click('#nextbtn')

await navigationPromise
  // 关闭浏览器
  await browser.close();
