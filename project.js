let fs = require("fs");
let wd = require("puppeteer");

async function main() {
    let browser = await wd.launch({ headless: false, defaultViewport: false, args: ["--start-maximized"] });
    let tabs = await browser.pages();
    let tab = tabs[0];
    await tab.goto("https://web.whatsapp.com");
    await new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    });
    let info1 = fs.readFileSync("1.txt", "utf-8");
    let info2 = fs.readFileSync("2.txt", "utf-8");
    let info3 = fs.readFileSync("3.txt", "utf-8");
    // Messaging to people.
    await tab.waitForSelector("[title='Rishabh']", { visible: true });
    let Name = await tab.$("[title='Rishabh']");
    await Name.click();
    await new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    });
    let input1 = await tab.$("._1JAUF._2x4bz ._2_1wd.copyable-text.selectable-text");
    for (let i = 0; i < 1; i++) {
        await input1.type(info1);
        await tab.keyboard.press("Enter");
    }
    await new Promise(function (resolve, reject) {
        setTimeout(resolve, 3000);
    });
    // Messaging into group.
    let Name2 = await tab.$("._3Dr46 [title='Group 1']");
    await Name2.click();
    let input2 = await tab.$("._1JAUF._2x4bz ._2_1wd.copyable-text.selectable-text");
    await input2.type(info3);
    await tab.keyboard.press("Enter");
    for (let i = 0; i < 5; i++) {
        await input2.type(info2);
        await tab.keyboard.press("Enter");
    }
    await new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    });
    let click1 = await tab.$('span [data-testid="menu"]');
    await click1.click();
    await new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000);
    });
    await tab.waitForSelector("._11srW._2xxet", { visible: true });
    let logout = await tab.$$("._11srW._2xxet");
    await logout[6].click();
    await new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000);
    });
    await browser.close();
}

main();
