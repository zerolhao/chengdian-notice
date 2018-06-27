var $form = $('.container form')
$form.on('submit', function(e) {
  e.preventDefault()
  var username = $form.find('[name=username]').val()
  var schoolname = $form.find('[name=schoolname]').text()
  // 检查字段
  if(!username||!schoolname){
    $('#dialog')[0].style.display = 'block'
    $('#closeDialog').one('click',function(){
      $('#dialog')[0].style.display = 'none'
    })
    return
  }
  // 渲染 notice
  $('#username').text(username)
  $('#schoolname').text(schoolname)
  $('#canvasToImg').addClass('active')
  setTimeout(function(){
    html2canvas($('#canvasToImg')[0]).then(function(canvas) {
      //document.body.appendChild(canvas)
      var imgSrc = canvas.toDataURL("image/png")
      var img = $('<img>').attr('src',imgSrc)
      $('#noticeImg').append(img).addClass('active')
    })
  },700)
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