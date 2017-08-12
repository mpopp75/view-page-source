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

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting1 = browser.storage.local.get("openInTabs");
    getting1.then(setOpenInTab, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);