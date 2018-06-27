var currentTab;

function buttonClicked() {
    console.log(currentTab.url);

    var getting = browser.storage.local.get("openInTabs");
    getting.then(openUrl, onError);
}

function openUrl(result) {
    var creating = null;
    if (result.openInTabs === "window") {
        creating = browser.windows.create({
            url: "view-source:" + currentTab.url
        });
        creating.then(onCreated, onError);
    } else {
        creating = browser.tabs.create({
          url: "view-source:" + currentTab.url,
          index: currentTab.index + 1
        });
        creating.then(onCreated, onError);
    }

    function onCreated() {
        console.log("Source tab for " + currentTab.url + " created.");
    }
}

function onError(error) {
    console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(buttonClicked);

function updateActiveTab(tabs) {

  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
    }
  }

  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
}

browser.tabs.onUpdated.addListener(updateActiveTab);
browser.tabs.onActivated.addListener(updateActiveTab);
updateActiveTab();
