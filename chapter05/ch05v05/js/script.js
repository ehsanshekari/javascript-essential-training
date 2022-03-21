function getBrowserName() {
  var lsBrowser = navigator.userAgent;
  if (lsBrowser.indexOf("MSIE") >= 0) {
    return "MSIE";
  } else if (lsBrowser.indexOf("Firefox") >= 0) {
    return "Firefox";
  } else if (lsBrowser.indexOf("Chrome") >= 0) {
    return "Chrome";
  } else if (lsBrowser.indexOf("Safari") >= 0) {
    return "Safari";
  } else if (lsBrowser.indexOf("Opera") >= 0) {
    return "Opera";
  } else {
    return "UNKNOWN";
  }
}

document.write(getBrowserName());