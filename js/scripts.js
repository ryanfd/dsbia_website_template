// slide mobile nav back on item click
$(document).ready(function(){
  $("a.mobile").click(function(){
    $('input[type=checkbox]').click(); 
  });
});


// change menu selection font size based on scrollbar position  
$(window).on('scroll', function() {
  var y_scroll_pos = window.pageYOffset;
  var scroll_pos_test = 5630;             // set to whatever you want it to be

  if (y_scroll_pos >= scroll_pos_test) {
    //do stuff
    $(".menu-types a#regular").css("font-size", "1.1rem");
    $(".menu-types a#takeout").css("font-size", "1.6rem");
  } else {
    $(".menu-types a#regular").css("font-size", "1.6rem");
    $(".menu-types a#takeout").css("font-size", "1.1rem");
  }
});
// $(document).ready(function() { // get scrollbar position [NOT USED IN FINAL PRODUCT]
//   $(".menu-types a#takeout").click(function() {
//     var scroll = $(window).scrollTop();
//     alert(scroll + " px");
//     });
// }); 