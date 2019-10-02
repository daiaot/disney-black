import $ from 'jquery'

export default class ShowMore1 {
  constructor(elem) {
    this.elem = elem
    this.bindEvents()
  }

  bindEvents() {
    $(window).on('load resize', function() {
      $(function() {
        $('._showmore--1').each(function() {
          $(this)
            .find('li:gt(8)')
            .each(function() {
              $(this).hide()
            })
          var btn = $('.gallery-wrap').find('.__btn--1')
          var bg = $('.gallery-wrap').find('.__wrap--1')
          btn.click(function() {
            // $(this).parent().find("li").fadeIn(1000);
            $(this)
              // .parent()
              .parent()
              .find('li')
              .fadeIn('slow')
            // btn.remove()
            btn.fadeOut('fast')
            bg.fadeOut('slow')
            // $(this).fadeOut('fast');
          })
        })
      })
    })
  }
}
