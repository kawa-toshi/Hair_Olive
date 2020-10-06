
// ハンバーガーメニューのfadein
$(function(){
  $(window).scroll(function (){
      $('.right-to-left').each(function(){
          
          var scroll = $(window).scrollTop();
          var elemPos = $(this).offset().top;
			    var windowHeight = $(window).height();
          
          if (scroll > 1000) {
            $(this).addClass('scrollin');
            $(this).removeClass('scrollout');
          } else {
            $(this).addClass('scrollout');
            $(this).removeClass('scrollin');
          }

// メニューの画像のfadein
          if (scroll > 1100) {
            $('.cut-image').addClass('scrollin');
          };
          if (scroll > 1400) {
            $('.color-image').addClass('scrollin');
          };
          if (scroll > 1600) {
            $('.shampoo-image').addClass('scrollin');
          };
          
      });

      
  });
  
});

//ハンバーガーメニュー
$(function(){

  $('.nav_toggle').on('click', function () {
      $('.nav_toggle, .nav').toggleClass('show');
  });

  // 下線の動き
  $(window).on('scroll',function(){

    $(".JS_ScrollAnimationItem").each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight){
        $(this).addClass('isActive');
      }
    });
    
   });

   $(function(){
     // 画像のスライダー
    $(".fade-img img:not(:first-child)").hide();
    setInterval(function() {
      $(".fade-img img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".fade-img");
    },5000);

    // タブレット & スマホのハンバーガーメニュー
    function toggleNav() {
      var body = document.body;
      var hamburger = document.getElementById('js-hamburger');
      var blackBg = document.getElementById('js-black-bg');
    
      hamburger.addEventListener('click', function() {
        body.classList.toggle('nav-open');
      });
      blackBg.addEventListener('click', function() {
        body.classList.remove('nav-open');
      });
    }
    toggleNav();
  });
    



  });



