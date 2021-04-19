$(function(){
  $('.fa-bars').click(function(){
    var $header=$('.header2-nav');
    if($header.hasClass('open')){
      $header.removeClass('open');
      $header.slideUp(500);
    }else{
      $header.addClass('open');
      $header.slideDown(500);
    }
  });

  $('.img-wrap img:nth-child(n+2)').hide();
      setInterval(function() {
        $(".img-wrap img:first-child").fadeOut(3000);
        $(".img-wrap img:nth-child(2)").fadeIn(3000);
        $(".img-wrap img:first-child").appendTo(".img-wrap");
      }, 5000);

      $(window).scroll(function () {
    
        var scrollTop = $(this).scrollTop();
        var scrollBottom = scrollTop + $(this).height();
        var effectPos = scrollBottom - 50;
        
        
        $(".news-item").each(function (i) {
            if(effectPos > $(this).offset().top){
                var that = this;
    
               
                setTimeout(function () {
                   $(that).addClass("fadein");
                }, 250 * i);
            }
        });
    });
    $(window).scroll(function () {
    
      var scrollTop = $(this).scrollTop();
      var scrollBottom = scrollTop + $(this).height();
      var effectPos = scrollBottom - 50;
      
      
      $(".corporate-item").each(function (i) {
          if(effectPos > $(this).offset().top){
              var that = this;
  
             
              setTimeout(function () {
                 $(that).addClass("fadein");
              }, 250 * i);
          }
      });
  });
    
  $(window).scroll(function () {
    
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;
    
    
    $(".image-item").each(function (i) {
        if(effectPos > $(this).offset().top){
            var that = this;

           
            setTimeout(function () {
               $(that).addClass("fadein");
            }, 250 * i);
        }
    });
});
         



  
});