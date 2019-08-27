import $ from 'jquery'
import 'slick-carousel'

export default class SliderItem {
  constructor(selector) {
    this.$el = $(selector)
    this.init()
    this.bindEvents()
  }

  init() {
    this.$el.on('init',function(){
      $('.slide-wrap__balloon').addClass('on');
      // $('.slide-wrap__balloon').addClass('hide');
    });

    this.$el.slick({
      dots: true,
      infinite: true,
      variableWidth: true,
      autoplay: true,
      pauseOnFocus: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 300,
      swipe: false,
      arrows: false,
      // pauseOnHover: true,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      responsive: [
        {
          breakpoint: 736,
          settings: {
            // slidesToShow: 1,
            // centerMode: false,
            // centerPadding: '20px',
            variableWidth: false,
            pauseOnHover: false,
            // variableWidth: true,
          },
        },
      ],
    })
  }

  bindEvents() {
    // console.log('Slider - bindEvents()')

    this.$el.on('beforeChange',function(){
      // console.log('Slider - bindEvents() - beforeChange')
      // $('.slide-wrap__balloon').addClass('hide');
      $('.slide-wrap__balloon').removeClass('on');
    });
    this.$el.on('afterChange',function(){
      // console.log('Slider - bindEvents() - afterChange')
      $('.slide-wrap__balloon').addClass('on');
      // $('.slide-wrap__balloon').removeClass('hide');
    });

  }


}
