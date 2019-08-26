import $ from 'jquery'
import 'slick-carousel'

export default class Slider {
  constructor(selector) {
    this.$el = $(selector)
    this.init()
  }

  init() {
    this.$el.slick({
      dots: true,
      infinite: true,
      variableWidth: true,
      // autoplay: true,
      autoplay: false,
      pauseOnFocus: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 300,
      arrows: false,
      pauseOnHover: true,
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
}
