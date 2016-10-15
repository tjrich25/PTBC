/*$('.home').hover(function() {
  $('.home').fadeTo('slow', 0.25);
},
function() {
  $('.home').fadeTo('slow', 1);
});

$('.about').hover(function() {
  $('.about').fadeTo('slow', 0.25);
},
function() {
  $('.about').fadeTo('slow', 1);
});

$('.contact').hover(function() {
  $('.contact').fadeTo('slow', 0.25);
},
function() {
  $('.contact').fadeTo('slow', 1);
});

$('.contact').click(function() {
  $('.contact').css('background-color', 'red');
});

$('.about').click(function() {
  $('.about').css('background-color', 'blue');
});

$('.home').click(function() {
  $('.home').css('background-color', 'green');
});*/

// $('.nav').hover(function() {
//   $(this).fadeTo('slow', 0.25);
// },
// function() {
//   $(this).fadeTo('slow', 1);
// });
//
// $('.nav').click(function() {
//   $(this).css('background-color', 'blue');
// });
//
// $('.nav').click(function() {
//   $(this).append('<p>Hi</p>');
// });
//
// $('.nav').click(function() {
//   $(this).css('font-size', '50px');
// });

$('.nav').hover(function() {
  $(this).fadeTo('slow', 0.25);
},
function() {
  $(this).fadeTo('slow', 1);
});

$('.nav').click(function() {
  $(this).css('background-color', 'blue').append('<p>Hi</p>').css('font-size', '50px');
});
