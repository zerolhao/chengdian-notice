var $form = $('.container form')
$form.on('submit', function(e) {
  e.preventDefault()
  let names = 'username schoolname'.split(' ')
  let data = {}
  names.map((string) => {
    data[string] = $form.find(`[name=${string}]`).val()
    console.log(data)
    //$.post('/xxx', data)
  })
})

// 学校选择列表
{
  let $selMask = $('.select-mask')
  let $selBtn = $('.select-btn')
  let $selUl = $('.select-ul')

  $selBtn.on('click', function(e) {
    e.stopPropagation()
    if ($selMask.hasClass('active') && $selUl.hasClass('active')) {
      $selMask.removeClass('active')
      $selUl.removeClass('active')
    } else {
      $selMask.addClass('active')
      $selUl.addClass('active')
    }
    $selMask.one('click', function(e) {
      e.stopPropagation()
      $selMask.removeClass('active')
      $selUl.removeClass('active')
    })
  })
  $selUl.on('click', '.select-li', function(e) {
    let text = $(e.currentTarget).find('p').text()
    $selBtn.text(text)
  })
}