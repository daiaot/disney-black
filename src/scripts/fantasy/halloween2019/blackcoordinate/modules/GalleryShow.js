import $ from 'jquery'

export default class GalleryShow {
  constructor(elem) {
    this.elem = elem
    this.bindEvents()
  }

  bindEvents() {
    $(window).on('load resize', function() {
      $(function() {
        $('._showmore').each(function() {
          $(this)
            .find('li:gt(5)')
            .each(function() {
              $(this).hide()
            })
        })
      })
    })
  }
}
