// slide mobile nav back on item click
$(document).ready(function(){
  $("a.mobile").click(function(){
    $('input[type=checkbox]').click(); 
  });
});


// change menu selection font size based on scrollbar position  
$(window).on('scroll', function() {
  var y_scroll_pos = window.pageYOffset;
  var scroll_pos_test = 5503;             // scroll point of interest

  if (y_scroll_pos >= scroll_pos_test) {
    //do stuff
    $(".menu-types a#regular").css("font-size", "1.1rem");
    $(".menu-types a#takeout").css("font-size", "2.5rem");
  } else {
    $(".menu-types a#regular").css("font-size", "2.5rem");
    $(".menu-types a#takeout").css("font-size", "1.1rem");
  }
});
$(document).ready(function() { // get scrollbar position [NOT USED IN FINAL PRODUCT]
  $("body").keyup(function(e) {
    if (e.keyCode == 8) {
      var scroll = $(window).scrollTop();
      alert("POS: " + scroll + " px\n" + "WIDTH: " + $(window).width() + " px");
    }
    });
}); 

// selected menu effect, wavcing text on selected menu
$(window).on('scroll', function() {
  var y_scroll_pos = window.pageYOffset;  // current position
  var scroll_pos_test = 5503;             // scroll point of interest

  if (y_scroll_pos >= scroll_pos_test) {
    //do stuff
    $(".menu-types a#regular").css("-webkit-animation-play-state", "paused");
    $(".menu-types a#takeout").css("-webkit-animation-play-state", "running");
  } else {
    $(".menu-types a#regular").css("-webkit-animation-play-state", "running");
    $(".menu-types a#takeout").css("-webkit-animation-play-state", "paused");
  }
});

// menu select, change text color based on position
$(window).on('scroll', function() {
  var y_scroll_pos = window.pageYOffset; // current position
  var window_size = $(window).width(); // current width

  if (window_size > 1107) $(".menu-types a").css("color", "#090C0C"); // always over image
  if (window_size <= 1107) {
    // takeout menu link

    // over image
    if ((y_scroll_pos >= 0 && y_scroll_pos < 276) || (y_scroll_pos >= 548 && y_scroll_pos < 849) ||
        (y_scroll_pos >= 1573 && y_scroll_pos < 1872) || (y_scroll_pos >= 2577 && y_scroll_pos < 2876) ||
        (y_scroll_pos >= 3162 && y_scroll_pos < 3465) || (y_scroll_pos >= 5372 && y_scroll_pos < 5502)) { 
      $(".menu-types a#takeout").css("color", "#090C0C");
    }
    // over white
    if ((y_scroll_pos >= 276 && y_scroll_pos < 548) || (y_scroll_pos >= 1872 && y_scroll_pos < 2577) ||
        (y_scroll_pos >= 3465 && y_scroll_pos < 3753) || (y_scroll_pos >= 4329 && y_scroll_pos < 4934) ||
        (y_scroll_pos >= 5502 && y_scroll_pos < 5801) || (y_scroll_pos >= 6526 && y_scroll_pos < 7053) ||
        (y_scroll_pos >= 7433 && y_scroll_pos < 8152)) { 
      $(".menu-types a#takeout").css({"color":"#69462B"});
    }
    // over brown
    if ((y_scroll_pos >= 849 && y_scroll_pos < 1573) || (y_scroll_pos >= 2876 && y_scroll_pos < 3162) ||
        (y_scroll_pos >= 3753 && y_scroll_pos < 4329) || (y_scroll_pos >= 4934 && y_scroll_pos < 5372) ||
        (y_scroll_pos >= 5801 && y_scroll_pos < 6526) || (y_scroll_pos >= 7053 && y_scroll_pos < 7433) ||
        (y_scroll_pos >= 8152)) { 
      $(".menu-types a#takeout").css({"color":"#FFFFFF"});
    }

    // regular menu link

    // over image
    if ((y_scroll_pos >= 0 && y_scroll_pos < 306) || (y_scroll_pos >= 595 && y_scroll_pos < 898) ||
        (y_scroll_pos >= 1625 && y_scroll_pos < 1924) || (y_scroll_pos >= 2623 && y_scroll_pos < 2923) ||
        (y_scroll_pos >= 3215 && y_scroll_pos < 3514) || (y_scroll_pos >= 5424 && y_scroll_pos < 5578)) { 
      $(".menu-types a#regular").css("color", "#090C0C");
    }
    // over white
    if ((y_scroll_pos >= 306 && y_scroll_pos < 595) || (y_scroll_pos >= 1924 && y_scroll_pos < 2623) ||
        (y_scroll_pos >= 3514 && y_scroll_pos < 3803) || (y_scroll_pos >= 4378 && y_scroll_pos < 4987) ||
        (y_scroll_pos >= 5578 && y_scroll_pos < 5869) || (y_scroll_pos >= 6593 && y_scroll_pos < 7121) ||
        (y_scroll_pos >= 7500 && y_scroll_pos < 8220)) { 
      $(".menu-types a#regular").css({"color":"#69462B"});
    }
    //over brown
    if ((y_scroll_pos >= 898 && y_scroll_pos < 1625) || (y_scroll_pos >= 2923 && y_scroll_pos < 3215) ||
        (y_scroll_pos >= 3803 && y_scroll_pos < 4378) || (y_scroll_pos >= 4987 && y_scroll_pos < 5424) ||
        (y_scroll_pos >= 5869 && y_scroll_pos < 6593) || (y_scroll_pos >= 7121 && y_scroll_pos < 7500) ||
        (y_scroll_pos >= 8220)) { 
      $(".menu-types a#regular").css({"color":"#FFFFFF"});
    }
  } 
  if (window_size < 1000) { // content starts resizing divs
    $(".menu-types a").css("color", "#090C0C");
  }
});