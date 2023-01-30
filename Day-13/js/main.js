window.addEventListener("load", onLoad);

function _element(element) {
  var _e = element;
  element = document.querySelectorAll(element);
  if (element === null || element.length === 0) {
    throw new Error(
      `Element '${_e}' is null i.e '${_e}' not available in html`
    );
  } else {
    return element;
  }
}

function _event(element, event, callback) {
  element = _element(element);
  if (element.length === undefined) {
    element.addEventListener(event, callback);
  } else {
    element.forEach(function (_element) {
      _element.addEventListener(event, callback);
    });
  }
}
function onLoad() {
  _event("#btnId", "click", function () {
    console.log("click");
  });
}
