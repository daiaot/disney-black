import $ from 'jquery'

export default class ShowMore {
  constructor(elem) {
    console.log('ShowMore -- constructor()')
    this.elem = elem
    this.target_id = this.elem.getAttribute('data-target')
    this.target = document.getElementById(this.target_id)
    this.bg = $(this).find('.showmore-wrap')
    console.log('data-target:' + this.target_id)
    console.log('target:' + this.target)
    console.log(this.bg)
    this.init()
  }

  init() {
    $(window).on('load resize', function() {
      $(function() {
        $('._showmore').each(function() {
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

    this.bindEvents(this.target)

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

  // bindEvents(this) {

  //   console.log('ShowMore -- bindEvents()')
  //   console.log(this)

    
  //   $(window).on('load resize', function () {
  //     $(function() {
  //       $('._showmore').each(function() {
  //         $(this)
  //           .find('li:gt(8)')
  //           .each(function() {
  //             $(this).hide()
  //           })
  //         // var btn = $('.gallery-wrap').find('.sec-btn__showmore')
  //         // var bg = $('.gallery-wrap').find('.__wrap--1')
  //         // var target = $(this).data('data-target');
  //         // var target = $(this).data('data-target');
  //         console.log(target)
  //         // var show_el = document.getElementById(target);
  //         // console.log(show_el)

  //         // var btn = $(show_el).find('.sec-btn__showmore')
  //         // var bg = $(show_el).find('.showmore-wrap')

  //           // $(this).parent().find("li").fadeIn(1000);
  //           // $(this)
  //         $(this)
  //           // .parent()
  //           .parent()
  //           .find('li')
  //           .fadeIn('slow')
  //           // btn.remove()
  //         this.elem.fadeOut('fast')
  //         bg.fadeOut('slow')
  //           // $(this).fadeOut('fast');

  //       })
  //     })
  //   })
  // }

}
