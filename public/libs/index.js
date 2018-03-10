/**
 * Created by ZhaoShuai on 2018/1/24.
 * WeChat && QQ 1812532016
 */
$(function() {
   $('#logbtn').on('click', function(){
      var clientH = $(window).height();
      $('.mask').css({'display': 'block', 'height': clientH});
   });

   $("#register_btn").click(function() {
      $("#register_form").css("display", "block");
      $("#login_form").css("display", "none");
   });
   $("#back_btn").click(function() {
      $("#register_form").css("display", "none");
      $("#login_form").css("display", "block");
   });
});
