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
/* Due to how scoping works in JavaScript modules, the `selectLanguage()`
   function is only declared in the module but not the global scope. The
   following will declare this function also in the `window` (the HTML
   document) scope so we can call it from the HTML document. */
window.selectLanguage = selectLanguage;

function processForm () { // eslint-disable-line no-unused-vars
  alert('processing form (' + $('#inputtext')[0].value + ')');
  alert('shiftLetter("a", 1) function result: ' + shiftLetter('a', 1));
}
window.processForm = processForm;

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

/* Takes a letter and a shift as arguments and returns the shifted
 * letter.
 */
export function shiftLetter (letter, shift) {
  var code = letter.charCodeAt(0) + shift;
  return String.fromCharCode(code);
}
