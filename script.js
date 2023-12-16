document.addEventListener('DOMContentLoaded', function() {
  var header = document.getElementById('myHeader');
  var page = document.getElementById('page');
  var openMenuButton = document.getElementById('openmenu');

  window.addEventListener('scroll', function() {
      page.classList.remove('menuopen');
      if (window.scrollY >= 100) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
  });

  // Event listener to remove the sticky class when the button is clicked
  openMenuButton.addEventListener('click', function() {
      header.classList.remove('sticky');
      page.classList.add('menuopen');
  });

var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function(link) {
      link.addEventListener('click', function(event) {
          // Prevent the default action
          event.preventDefault();

          // Get the target element
          var targetId = this.getAttribute('href');
          var targetElement = document.querySelector(targetId);

          // Smooth scroll to target
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
});


var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  loop: true,
  rotate: true,
  mousewheel: {
  invert: false,
},
});

const colors = ["var(--color1)", "var(--color2)", "var(--color3)"];

const textGroups = document.querySelectorAll(".text-group");
textGroups.forEach((group) => group.count = group.querySelectorAll("text").length);
const uses = document.querySelectorAll("#textClip use");
const blobs = document.querySelectorAll("#background path");

let currCount = 1;

function colorBlobs() {
blobs.forEach((blob) => {
  blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
});
}

function nextIteration() {
// Change the color of all the blobs
colorBlobs();

// Show new set of lines
uses.forEach((use, i) => {
  use.setAttribute('href', i < textGroups[currCount].count ? `#text${currCount + 1}.${i + 1}` : '');
});

currCount = currCount + 1 < textGroups.length ? currCount + 1 : 0;
}

// Since all of our blobs are using the same animation, we only
// need to listen to one of them
blobs[0].addEventListener("animationiteration", nextIteration);

colorBlobs();

$( "#contact_form" ).submit(function( event ) {
  var text = $('#contact_form').find('input[name="name"]').val();
  $("#contact_form").addClass("shrink");
  $(".container").addClass("bgchange");
  $(".thanks").addClass("reveal");
  $("body").addClass("invert");
  $( ".thanks" ).append( "<span>" + text + "</span>" );
  event.preventDefault();

  
});

( function($) {

$(document).ready(function() {
  
  var s           = $('.slider'),
      sWrapper    = s.find('.slider-wrapper'),
      sItem       = s.find('.slide'),
      btn1       = s.find('.slider-link'),
      sWidth      = sItem.width(),
      sCount      = sItem.length,
      slide_date  = s.find('.slide-date'),
      slide_title = s.find('.slide-title'),
      slide_text  = s.find('.slide-text'),
      slide_more  = s.find('.slide-more'),
      slide_image = s.find('.slide-image img'),
      sTotalWidth = sCount * sWidth;
  
  sWrapper.css('width', sTotalWidth);
  sWrapper.css('width', sTotalWidth);
  
  var clickCount  = 0;
  
  btn1.on('click', function(e) {
    e.preventDefault();

    if( $(this).hasClass('next') ) {
      
      ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
    } else if ( $(this).hasClass('prev') ) {
      
      ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
    }
    TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


    //CONTENT ANIMATIONS

    var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
    var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

    TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
    TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
    TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
    TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
    TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

  });
        
});
})(jQuery);

$('.overlay').addClass('overlay-blue');


