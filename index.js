let cookies = 0; // Total Cookies

let cookiesPerClick = 1; // How many cookies will be added per click

let cookiesPerSecond = 0; // How many cookies are being added per second

let cursorUpgrade = 0; // How many times the cursor has been upgraded

let cursorUpgradeCost = 100; // How much it will cost to upgrade the cursor

let grandmaUpgrade = 0; // How many times the grandma has been upgraded

let grandmaUpgradeCost = 1000; // How much it will cost to upgrade grandma

let amountOfCookiesHTML = document.querySelector(".amount-of-cookies"); // HTML Total Amount of cookies

let cookiesPerSecHTML = document.querySelector(".cookies-per-second"); // HTML Cookies being added per second

let currentCursorUpgradeHTML = document.querySelector(".current-cursor-amount"); // HTML How many times has cursor been upgraded

let cursorUpgradeCostHTML = document.querySelector(".current-cursor-cost"); // HTML Current cursor cost

let currentGrandmaUpgradeHTML = document.querySelector(
  ".current-grandma-amount"
); // HTML How many times has grandma been upgraded

let grandmaUpgradeCostHTML = document.querySelector(".current-grandma-cost"); // HTML Current grandma Cost

// DOM Event Listener Clicking the cookie
document.querySelector(".cookie-img").addEventListener("click", function () {
  cookies += cookiesPerClick + cursorUpgrade; // Everytime the cookie is clicked, it will add the cookiesPerClick variable and the cursorUpgrade variable
  amountOfCookiesHTML.innerHTML = `${cookies} Cookies`; // Changes the HTML to the updated amount of cookies
});

document
  .querySelector(".cursor-upgradebtn")
  .addEventListener("click", function () {
    // Checks if the upgrade btn was clicked
    if (cookies >= cursorUpgradeCost) {
      // Check if you have enough cookies for the cursor upgrade
      cursorUpgrade++; // The cursor gets an upgrade
      cookies -= cursorUpgradeCost; // Subtract the cookies that cost to upgrade
      amountOfCookiesHTML.innerHTML = `${cookies} Cookies`; // Changes the cookies HTML
      cursorUpgradeCost += 100; // Adds 100 cookies to the cost of the cursor upgrade
      cursorUpgradeCostHTML.innerHTML = `Current Cursor Upgrade: ${cursorUpgradeCost}`; // Changes the cost of the cursor upgrade HTML
      currentCursorUpgradeHTML.innerHTML = `Cursor Upgrade: ${cursorUpgrade}`; // Changes how many times you have upgrade Cursor HTML
    }
  });

document
  .querySelector(".grandma-upgradebtn")
  .addEventListener("click", function () {
    // Checks if the grandma btn was clicked
    if (cookies >= grandmaUpgradeCost) {
      // Checks if you have enough cookies for the grandma upgrade
      grandmaUpgrade++; // The grandma gets an upgrade
      cookies -= grandmaUpgradeCost; // Subtract the cookies that cost to upgrade
      amountOfCookiesHTML.innerHTML = `${cookies} Cookies`; // Changes the grandma HTML
      grandmaUpgradeCost += 1000; // Adds 1000 cookies to the cost of the grandma upgrade
      grandmaUpgradeCostHTML.innerHTML = `Current Grandma Upgrade: ${grandmaUpgradeCost}`; // Changes the cost of the grandma upgrade HTML
      currentGrandmaUpgradeHTML.innerHTML = `Grandma Upgrade: ${grandmaUpgrade}`; // Changes how many times you have upgrade grandma HTML
      cookiesPerSecHTML.innerHTML = `per second: ${grandmaUpgrade}`; // Changes how many cookies you are getting per second from the grandma upgrade HTML
      setInterval(function () {
        // Sets a timer to add 1 cookie automatically once you upgrade the grandma
        cookies++; // Makes you get a cookie every second
        amountOfCookiesHTML.innerHTML = `${cookies} Cookies`; // Changes the amount of cookies you have after the grandma upgrade cookie is added HTML
      }, 1000); // Sets a 1000 milisecond timer, this adds a cookie every 1000 miliseconds
    }
  });
