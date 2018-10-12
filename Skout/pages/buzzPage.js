/**
 * All functions and elements related to buzz page (the page that you see once you login) is written in this page class
 * 
 * Author : Piyumi
 * Date : 10-07-2018
 * 
 */
"use strict";

var buzzPage = function () {

    const chat = element(by.xpath("//div[@class='tablabel text-ellipsis']"));
    const friendRequests = element(by.xpath("//li[@data-ng-controller='ContactsCtrl']"));
    const notifications = element(by.xpath("//li[@data-ng-controller='NotificationsCtrl']"));
    const settingsDropdown = element(by.xpath("//li[@class='btn-group']"));

    this.get = function () {
        browser.get('https://www.skout.com/buzz');
    }

    this.clickOnLink = function(LinkName){
        element(by.xpath("//*[text()='"+LinkName+"']")).click();
    }

    this.clickOnChat = function(){
        chat.click();
    };

    this.checkFriendRequests = function(){
        friendRequests.click();
    };

    this.checkNotifications = function(){
        notifications.click();
    };

    this.selectOptionFromSettingsDropdown = function(dropDownOption){
        settingsDropdown.click();
        element(by.xpath("//li[@class='btn-group open']//*[text()='"+dropDownOption+"']")).click();
    };
};

module.exports = new buzzPage();