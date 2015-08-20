var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var tch = require("./tabchanged");
var aps = require("./allowpagesource");

var buttonsEnabled = {
  "16": "./view-page-source-16.png",
  "32": "./view-page-source-32.png",
  "64": "./view-page-source-64.png"
};

var buttonsDisabled = {
  "16": "./view-page-source-inactive-16.png",
  "32": "./view-page-source-inactive-32.png",
  "64": "./view-page-source-inactive-64.png"
};

var button = buttons.ActionButton({
  id: "viewpagesource",
  label: "View Page Source",
  icon: buttonsEnabled,
  onClick: viewPageSource
});

function viewPageSource() {
  var activeTabIndex = tabs.activeTab.index;

  tabs.open({
    url: "view-source:" + tabs.activeTab.url,
    onOpen: function onOpen(tab) {
      // open view source tab to the right of active tab
      tab.index = activeTabIndex + 1;
    }
  });
}

tch.TabChanged(tabs, button, buttonsEnabled, buttonsDisabled);