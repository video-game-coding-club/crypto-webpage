function selectLanguage (language) {
  console.log('selecting language ' + language)
  $('[lang]').each(function () {
    if ($(this).attr('lang') === language) {
      console.log('Showing ' + language)
      $(this).show()
    } else {
      console.log('hiding ' + $(this).attr('lang'))
      $(this).hide()
    }
  })
}

$(function () {
  selectLanguage('en')
})
