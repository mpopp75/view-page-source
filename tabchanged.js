var aps = require("./allowpagesource");

function TabChanged(tabs, button, buttonsEnabled, buttonsDisabled) {
    tabs.on("activate", function(tab) {
        switchButton(tab, button, buttonsEnabled, buttonsDisabled);
    });

    tabs.on("load", function(tab) {
        switchButton(tab, button, buttonsEnabled, buttonsDisabled);
    });
}

function switchButton(tab, button, buttonsEnabled, buttonsDisabled) {
    if(aps.allowPageSource(tab.url)) {
        button.disabled = false;
        button.icon = buttonsEnabled;
    } else {
        button.disabled = true;
        button.icon = buttonsDisabled;
    }
}

exports.TabChanged = TabChanged;