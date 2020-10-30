// slide mobile nav back on item click
$(document).ready(function(){
  $("a.mobile").click(function(){
    $('input[type=checkbox]').click(); 
  });
});


// $(document).on('click', 'a[href^="#"]', function (e) { // hamburger transition on safari
//   if (navigator.userAgent.search("Safari") >= 0) {
//     $("input[type=checkbox]").click(function(){
//       if($(this).prop("checked") == true) { // is checked
//         $("#sidebarMenu").css({"-webkit-transform":"translateX(-250px)"});
//       } else if ($(this).prop("checked") == false) { // unchecked
//         $("#sidebarMenu").css({"-webkit-transform":"translateX(0px)"});
//       }
//     });
//   }
// });