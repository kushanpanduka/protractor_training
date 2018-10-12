var homePage = function () {
    
    //create variables for the input fields
    var homeLabel = element(by.xpath("//h1[@class='ng-scope']"));
    var logoutLink = element(by.xpath("//a[@href='#/login']"));

    //verify the "Home" label is displayed
    this.checkHomeLabel = function () {
        return homeLabel.getText();
    };

    //click on the Logout link
    this.clickLogout = function () {
        logoutLink.click();
        browser.sleep(5000);
    };
};
module.exports = new homePage();