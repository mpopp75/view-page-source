function allowPageSource(url) {
  // no page source if already page source or for about: pages
  if (url.substring(0,12) !== "view-source:" &&
      url.substring(0,6)  !== "about:") {
    return true;
  }

  return false;
}

exports.allowPageSource = allowPageSource;