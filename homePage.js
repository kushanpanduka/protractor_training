/**
 * homePage script has all the functions related to the home page of skout
 * 
 * @author Shavik
 * @version 1.0
 * @since 10-04-2018
 * 
 */
"use strict";

var homePage = function () {

    var common = require('../scripts/common');

    var username = element(by.id('username'));
    var password = element(by.id('password'));
    var submitBtn = element(by.buttonText('Log in'));

    var googlePlay = element(by.className('googleplay'));
    var appStore = element(by.className('appstore'));

    var name = element(by.id('name'));
    var bdayMonth = element(by.id('birthday-month'));
    var bdayDay = element(by.id('birthday-day'));
    var bdayYear = element(by.id('birthday-year'));
    var genderM = element(by.id('gender-male'));
    var genderF = element(by.id('gender-female'));
    var intMale = element(by.id('interested-male'));
    var intFemale = element(by.id('interested-female'));
    var intBoth = element(by.id('interested-both'));
    var submitBtn = element(by.buttonText('Sign up'));
    /**
     * This is to login to the page
     * @param userName - Username of the user, will be taken from test
     * @param passwrd - Password of the user, will be taken from the test
     */
    this.loginHomePage = function loginHomePage(userName, passwrd) {

        common.waitElementToBeClickable(username);
        username.sendKeys(userName);
        password.sendKeys(passwrd);
        submitBtn.click();

    };


    /**
     * This function is to click on google play icon
     */
    this.googlePlayClick = function googlePlayClick() {
        googlePlay.click();
    };

    /**
     * This function is to click on app store icon
     */
    this.appStoreClick = function appStoreClick() {
        appStore.click();
    };

    this.newMaleUser = function newMaleUser(nameF, month, day, year, gender, pref) {
        name.sendKeys(nameF);
        bdayMonth.sendKeys(month);
        bdayDay.sendKeys(day);
        bdayYear.sendKeys(year);
        genderM.click();
        intFemale.click();
        //submitBtn.click();

    };

};

module.exports = new homePage();