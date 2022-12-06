const { By, Builder } = require('selenium-webdriver');

const links = ['https://defiant-apparel.surge.sh/']

let run = async (link) => {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get(link);

    await driver.manage().setTimeouts({ implicit: 500 });

    let textBox = await driver.findElement(By.id('inp'));
    let submitButton = await driver.findElement(By.css('button'));

    await textBox.sendKeys('instructions');
    await submitButton.click();

    after(async () => await driver.quit());
}

links.forEach((link) => {
    run(link);
});