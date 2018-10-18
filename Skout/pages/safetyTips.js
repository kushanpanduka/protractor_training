"use strict";

var utils = require('../pages/utils');

var btnReportAbuse = element(by.xpath('//a[contains(text(), "Report Abuse")]'));
var linkSafetyAwarenessOnlineSafety = element(by.xpath('//div[@class="safety-box-left"]//a[contains(text(), "Family Online Safety Institute website")]'));
var linkParentOnlineSafety = element(by.xpath('//div[@class="safety-sidebox"]//a[contains(text(), "Family Online Safety Institute website")]'));
var linkSkoutPolicies = element(by.xpath('//a[contains(text(), "Skout policies")]'));
var linkSkoutSupport = element(by.xpath('//div[@class="tab-pane ng-scope active"]//a[contains(text(), "Skout support")]'));

var safetyTips = function(){
    //this function will click on 'Report Abuse' button
    this.clickReportAbuse = function clickReportAbuse(){
        btnReportAbuse.click();
    };  

    //this function will click 'Family Online Safety Institute website' URL under 'Safety Awareness Center'
    this.clickSafetyAwarenessOnlineSafety = function clickSafetyAwarenessCenterOnlineSafety(){
        linkSafetyAwarenessOnlineSafety.click();
    };

    //this function will click 'Family Online Safety Institute website' URL under 'Parents'
    this.clickParentOnlineSafety = function clickParentOnlineSafety(){
        linkParentOnlineSafety.click();
    };

    //this function will click 'Skout Policies' under 'Features'
    this.clickSkoutPolicies = function clickSkoutPolicies(){
        linkSkoutPolicies.click();
    };

    //this function will click 'Skout Support' under 'Features'
    this.clickSkoutSupport = function clickSkoutSupport(){
        linkSkoutSupport.click();
    };
};

module.exports = new homePage();