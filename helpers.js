/* Show the currently selected language and hide all of the other
 * languages.
 */
export function selectLanguage (language) {
  $('[lang]').each(function () {
    if ($(this).attr('lang') === language) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}
/* Due to how scoping works in JavaScript modules, the
 * `selectLanguage()` function is only declared in the module but not
 * the global scope. The following will declare this function also in
 * the `window` (the HTML document) scope so we can call it from the
 * HTML document.
 */
window.selectLanguage = selectLanguage;

function processForm () { // eslint-disable-line no-unused-vars
  // Save some values from the form.
  var formMessage = $('#inputtext')[0].value;
  var formKey = $('#key')[0].value;

  // Check if formKey is an integer. isNan is false if the key is
  // empty, so let's check that too.
  if (!isInteger(formKey)) {
    alert('The secret key must be an integer. You entered "' +
      formKey + '".');
  } else {
    // Process the form.
    alert('processing form (' + formMessage + ')');
    alert('result: ' + shiftText(formMessage, formKey));
  }
}
window.processForm = processForm;

/* Check if test is an integer. isNan is false if test is empty, so
 * check if test is empty too.
 */
export function isInteger (test) {
  if (!(isNaN(test) || test === '')) {
    if (Math.round(test) == test) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/* Takes a text and a shift as arguments and returns the shifted
 * text.
 */
export function shiftText (text, shift) {
  var code = '';

  for (var i in text) {
    code += shiftLetter(text[i], shift);
  }

  return code;
}

/* Takes a letter and a shift as arguments and returns the shifted
 * letter.
 */
export function shiftLetter (letter, shift) {
  // First change the letter into a number.
  var code = letter.charCodeAt(0);
  var Acode = 'A'.charCodeAt(0);
  var Zcode = 'Z'.charCodeAt(0);
  var acode = 'a'.charCodeAt(0);
  var zcode = 'z'.charCodeAt(0);

  // Change the shift into a positive number between 0 and 25.
  shift = shift % 26;
  if (shift < 0) {
    shift += 26;
  }

  // Only shift if the letter really is a letter.
  if (code >= Acode && code <= Zcode) {
    // The letter is a capital letter. Shift it.
    code += shift;
    // If code is too big, wrap it so it isn't.
    code = Acode + (code - Acode) % 26;
  } else if (code >= acode && code <= zcode) {
    // The letter is a lowercase letter. Shift it and wrap it.
    code += shift;
    code = acode + (code - acode) % 26;
  }

  return String.fromCharCode(code);
}

/* Initialize language setting on page load
 *
 * The `$(...` is a jQuery shorthand to do something once the page is
 * fully loaded and ready.
 *
 * https://learn.jquery.com/using-jquery-core/document-ready/
 */
$(function () {
  selectLanguage('en');
});
