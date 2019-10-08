import $ from 'jquery'

export default class ShowMore {
  constructor(elem) {
    this.elem = elem
    this.bindEvents()
  }

  bindEvents() {
    this.elem.addEventListener('click', function() {
      $(this).parent().find('li').fadeIn('slow')
      $(this).parent().find('.showmore-wrap').fadeOut('fast')
      $(this).fadeOut('fast')
    })
  }

}
