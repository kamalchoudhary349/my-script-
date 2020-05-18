# my-script-
let fs = require("fs");
let puppeteer = require('puppeteer');

let cfile = process.argv[2];
let pageToLike = process.argv[3];
let numPosts = parseInt(process.argv[4]);

(async function () {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        slowMo: 40,
        args: ['--start-maximized', '--disable-notifications', '--incognito']
    });

    let contents = await fs.promises.readFile(cfile, 'utf-8');
    let obj = JSON.parse(contents);
    let user = obj.user;
    let pwd = obj.pwd;

    let pages = await browser.pages();
    let page = pages[0];
    page.goto('https://www.instagram.com/', {
        waitUntil: 'networkidle2'
    });
    await page.waitForSelector('[name="username"]', {
        visible: true
    });

    await page.type('[name="username"]', user);
    await page.type('[name="password"]', pwd);
    await page.keyboard.press('Enter');
   // await page.click('input[type="submit"]');
    await page.waitForSelector('[placeholder="Search"]', {
        visible: true
    });


    await page.type('[placeholder="Search"]', pageToLike);
    page.goto('https://www.instagram.com/pepcodingeastdelhicenter/', {
        waitUntil: 'networkidle2'
    });
    await page.waitForSelector('button._5f5mN.jIbKX._6VtSN.yZn4P', {
        visible: true
    });
    await page.click('button._5f5mN.jIbKX._6VtSN.yZn4P');



    await page.waitForSelector('div._9AhH0', {
        visible: true
    });
    await page.click('div._9AhH0');

    await page.waitForSelector('span.fr66n', {
        visible: true
    });
    await page.click('span.fr66n');


    // for commenting on post
    await page.waitForSelector('textarea.Ypffh', {
        visible: true
    });
    await page.click('textarea.Ypffh');
    await page.waitForSelector('textarea.Ypffh', {
        visible: true
    });
    await page.focus('textarea.Ypffh')
    page.keyboard.type('amazing')

    await page.waitForSelector('button.sqdOP.yWX7d.y3zKF', {
        visible: true
    });
    await page.click('button.sqdOP.yWX7d.y3zKF');
    // await page.type('input[placeholder="Add a comment…"]', 'kamal349choudhary', {delay: 200})

    //
    await page.waitForSelector('[aria-label="Share Post"]', {
        visible: true
    });
    await page.click('[aria-label="Share Post"]');


    await page.waitForSelector('div._7UhW9.xLCgt.qyrsm.uL8Hv', {
        visible: true
    });
    await page.click('div._7UhW9.xLCgt.qyrsm.uL8Hv');

    await page.waitForSelector('input.j_2Hd.uMkC7.M5V28', {
        visible: true
    });
    await page.type('input[name="queryBox"]', 'sms_pec', {delay: 80})

    await page.waitForSelector('span.glyphsSpriteCircle__outline__24__grey_2.u-__7', {
        visible: true
    });
    await page.click('span.glyphsSpriteCircle__outline__24__grey_2.u-__7');


    
    //
    await page.waitForSelector('input.j_2Hd.uMkC7.M5V28', {
        visible: true
    });
    await page.type('input[name="queryBox"]', 'kamal349choudhary', {delay: 80})

    await page.waitForSelector('span.glyphsSpriteCircle__outline__24__grey_2.u-__7', {
        visible: true
    });
    await page.click('span.glyphsSpriteCircle__outline__24__grey_2.u-__7');







    //
    await page.waitForSelector('button.sqdOP.yWX7d.y3zKF.cB_4K', {
        visible: true
    });
    await page.click('button.sqdOP.yWX7d.y3zKF.cB_4K');
    
})();
