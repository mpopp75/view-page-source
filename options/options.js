function saveOptions(e) {
    e.preventDefault();
    var openInTabs = document.getElementsByName("openInTab");
    var selected = "";

    for (var i = 0; openInTabs.length; i++) {
        if (openInTabs[i].checked === true) {
            selected = openInTabs[i].value;
            break;
        }
    }

    browser.storage.local.set({
        openInTabs: selected
    });

    browser.storage.local.set({
        menuitem: (document.querySelector("#menuitem").checked ? "yes" : "no")
    });

    if (document.querySelector("#menuitem").checked === false) {
        var removing = browser.menus.remove("pagesource");
        removing.then(onRemoved, onError);
    }

    function onRemoved() {
        console.log("Tools menu item removed.");
    }
}

function restoreOptions() {

    function setOpenInTab(result) {
        var openInTabs = document.getElementsByName("openInTab");

        for (var i = 0; openInTabs.length; i++) {
            if (openInTabs[i].value === result.openInTabs) {
                openInTabs[i].checked = true;
                break;
            }
        }
    }

    function setMenuitem(result) {
        document.querySelector("#menuitem").checked = (result.menuitem === "no") ? false : true;
    }

    var getting1 = browser.storage.local.get("openInTabs");
    getting1.then(setOpenInTab, onError);

    var getting2 = browser.storage.local.get("menuitem");
    getting2.then(setMenuitem, onError);
}

function onError(error) {
    console.log(`Error: ${error}`);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);