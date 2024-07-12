
const puppeteer = require('puppeteer');
 
async function login() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
   // 跳转到相应的网站
  await page.goto('https://www.zoho.com/mail/');
  await page.waitForSelector('.header > #header > .zgh-utilities > .zgh-accounts > .zgh-login')
  await page.click('.header > #header > .zgh-utilities > .zgh-accounts > .zgh-login')
 
   // 输入账户
 await page.waitForSelector('#login_id')
await page.click('#login_id')
await page.type('#login_id', 'lixiaohu44@zoho.com');
await page.waitForSelector('#nextbtn')
await page.click('#nextbtn')
await page.waitForNavigation(); 
 // 输入密码
await page.type('#password', 'Suiyi44@');
await page.waitForSelector('#nextbtn')
await page.click('#nextbtn')  

 await page.waitForNavigation();
  // 登录成功后的操作，比如保存cookie等
  // ...
 
  await browser.close();
}
 
login();




