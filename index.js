var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "viewsource",
  label: "View Source",
  icon: {
    "16": "./view-source-16.png",
    "32": "./view-source-32.png",
    "64": "./view-source-64.png"
  },
  onClick: viewSource
});

function viewSource(state) {
  tabs.open("view-source:" + tabs.activeTab.url);
}