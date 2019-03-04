function formatAndCopyToClipboard(textAreaID) {
  var element = document.getElementById(textAreaID);
  formatMessage(element)
  selectMessage(element)
  document.execCommand('copy');
  alert("Successfully copied to clipboard! Now head on over to Instagram to paste your nicely formatted caption/comment. 😄");
}

function formatMessage(element) {
  var str = element.value;
  str = str.replace(/(?:\r\n|\r|\n)/g, "\u2063\n");
  element.value = str;
}

function selectMessage(element) {
  // resolve the element
  element = (typeof element === 'string') ? document.querySelector(element) : element;

  // select the text, with iOS as a special case
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {

      // save current contentEditable/readOnly status
      var editable = element.contentEditable;
      var readOnly = element.readOnly;

      // convert to editable with readonly to stop iOS keyboard opening
      element.contentEditable = true;
      element.readOnly = true;

      // create a selectable range
      var range = document.createRange();
      range.selectNodeContents(element);

      // select the range
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      element.setSelectionRange(0, 999999);

      // restore contentEditable/readOnly to original state
      element.contentEditable = editable;
      element.readOnly = readOnly;
  }
  else {
      element.select();
  }
}
