// wrapper for getElementById...because I'm lazy ;)
export function qs(selector) {
  return document.querySelector(selector);
}

export function setHtml(selector, text) {
  qs(selector).innerHTML = text;
}

export function setListener(selector, event, callback) {
  qs(selector).addEventListener(event, callback);
}

export function alertMessage(message, duration = 3000) {
  const alert = document.createElement("p");
  alert.innerHTML = message;
  alert.setAttribute(
    "style",
    "background-color:lightpink; border: 1px solid red; position:absolute; top:0; left:0; right:0;padding: 1em;"
  );
  document.body.appendChild(alert);
  setTimeout(function () {
    document.body.removeChild(alert);
  }, duration);
}
