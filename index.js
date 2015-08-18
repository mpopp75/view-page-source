var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "viewpagesource",
  label: "View Page Source",
  icon: {
    "16": "./view-page-source-16.png",
    "32": "./view-page-source-32.png",
    "64": "./view-page-source-64.png"
  },
  onClick: viewPageSource
});

function viewPageSource(state) {
  var activeTabIndex = tabs.activeTab.index;

  // no page source if already page source or for about: pages
  if (tabs.activeTab.url.substring(0,12) != "view-source:" &&
      tabs.activeTab.url.substring(0,6)  != "about:") {
    tabs.open({
      url: "view-source:" + tabs.activeTab.url,
      onOpen: function onOpen(tab) {
        // open view source tab to the right of active tab
        tab.index = activeTabIndex + 1;
      }
    });

  }
}