window.onload = function(){
  //return
  html2canvas($('#canvasToImg')[0],{
    allowTaint: true
  }).then(function(canvas) {
    //document.body.appendChild(canvas)

    var imgSrc = canvas.toDataURL("image/png")
    var img = $('<img>').attr('src',imgSrc)
    $('#noticeImg').append(img).addClass('active')
    
  });
}