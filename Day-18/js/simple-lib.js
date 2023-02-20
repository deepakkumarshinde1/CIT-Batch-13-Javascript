function _element(element) {
  var _e = element;
  element = document.querySelectorAll(element); //[]
  if (element === null || element.length === 0) {
    throw new Error(
      `Element '${_e}' is null i.e '${_e}' not available in html`
    );
  } else {
    return element;
  }
}

function _value(element) {
  element = _element(element);
  return element.value;
}

function _html(element, data) {
  element = _element(element);
  element[0].innerHTML = data;
}

function _getFromData(form) {
  var formData = new FormData(form);
  var formObj = {};
  formData.forEach(function (value, name) {
    formObj[name] = value;
  });
  return [formObj, formData];
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
