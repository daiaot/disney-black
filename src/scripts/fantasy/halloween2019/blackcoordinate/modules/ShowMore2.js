import $ from 'jquery'

export default class ShowMore2 {
  constructor(elem) {
    this.elem = elem
    this.bindEvents()
  }

  bindEvents() {
    $(window).on('load resize', function() {
      $(function() {
        $('._showmore--2').each(function() {
          $(this)
            .find('li:gt(8)')
            .each(function() {
              $(this).hide()
            })
          var btn = $('.gallery-wrap').find('.__btn--2')
          var bg = $('.gallery-wrap').find('.__wrap--2')
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
