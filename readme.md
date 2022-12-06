# WEB102 Prework Selenium Script

The purpose of this script is to query databases for WEB102 project to prevent them from being paused due to inactivity.

## Dependencies

* An up-to-date verison of Java installed on your machine, which is a dependency for Selenium
* selenium-webdriver v4.7.0 or higher, which starts the browser and connects to the website
* webdriver-manager v12.1.8 or higher, which automatically configures the path to the browser driver

Install these on your machine using these commands:

```shell
npm install selenium-webdriver
npm install -g webdriver-manager
```

## Executing the Script

Once you have installed the dependencies, navigate to the project root directory and start the webdriver manager:

```shell
webdriver-manager start
```

Then, in a separate shell, run the script:

```shell
node script.js
```

## Updating the Script

The script will need minor customizations as new sites are added, depending on the nature of each site. Simply loading the first page of a site may be sufficient if the page queries the database on load.

* [Selenium Docs: Write your first script](https://www.selenium.dev/documentation/webdriver/getting_started/first_script/)
* [Selenium Docs: Interacting with web elements](https://www.selenium.dev/documentation/webdriver/elements/interactions/)
