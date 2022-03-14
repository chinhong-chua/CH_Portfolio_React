// Display page active
$(document).ready(function(){

var slickSlider = $('.featuredslick');
var transformXIntervalNext = 0;
var transformXIntervalPrev = 0;
var tcc = 0;
var index = 0;  
var dotsnum = 0;
var fivedotsenable = 0;

slickSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 if(fivedotsenable == 1)
 {
 if ($('.featuredslick ul.slick-dots li').hasClass('oldpres')) 
 { $('.featuredslick ul.slick-dots li').removeClass('oldpres');}
     
 if ($('.featuredslick ul.slick-dots li').hasClass('pressed')) 
  { $('.featuredslick ul.slick-dots li').removeClass('pressed');}
 
 if ($('.featuredslick ul.slick-dots li.firstslide').hasClass('p-small-1')) 
  { $('.featuredslick ul.slick-dots li.slick-active').addClass('oldpres');}
 else
  { $('.featuredslick ul.slick-dots li.slick-active').addClass('oldpres');}
 }  
});

slickSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
  if(fivedotsenable == 1)
  { $('.featuredslick ul.slick-dots li.slick-active').addClass('pressed');
  var curr2 = $('.featuredslick ul.slick-dots li.pressed').attr('value');
  var curr3 = $('.featuredslick ul.slick-dots li.oldpres').attr('value');
    var curr4 = $('.featuredslick ul.slick-dots li.n-small-1').attr('value');
    var curr5 = $('.featuredslick ul.slick-dots li.p-small-1').attr('value');
    var firtsslde = $('.featuredslick ul.slick-dots li.n-small-1').attr('value') - 5;
    var fifthslde = Number($('.featuredslick ul.slick-dots li.pressed').attr('value')) + Number(1);
  
  if(curr2 > curr3) {
      if( $('.featuredslick ul.slick-dots li.firstslide').hasClass('pressed')) {
        $('.featuredslick ul.slick-dots').removeClass('prevclick wontPrev nextclick wontNext');
      }
      else if($('.featuredslick ul.slick-dots li.lastslide').hasClass('pressed')) {
        $('.featuredslick ul.slick-dots').removeClass('prevclick wontPrev nextclick wontNext');
      }
      else
      { $('.featuredslick ul.slick-dots').removeClass('prevclick');           
        $('.featuredslick ul.slick-dots').addClass('nextclick');
      }
    }
  else {
    if( $('.featuredslick ul.slick-dots li.firstslide').hasClass('pressed')) {
        $('.featuredslick ul.slick-dots').removeClass('prevclick wontPrev nextclick wontNext');
      }
      else if($('.featuredslick ul.slick-dots li.lastslide').hasClass('pressed')) {
        $('.featuredslick ul.slick-dots').removeClass('prevclick wontPrev nextclick wontNext nextclick');
      }
      else
      { 
    $('.featuredslick ul.slick-dots').removeClass('nextclick');           
      $('.featuredslick ul.slick-dots').addClass('prevclick'); 
      }
  }

  if($('.featuredslick ul.slick-dots').hasClass('nextclick')) {
    $('.featuredslick ul.slick-dots').removeClass('wontPrev');
      
      if ($('.featuredslick ul.slick-dots').hasClass('wontNext')) {           }
      else
      { 
        if($('.featuredslick ul.slick-dots li.lastslide').hasClass('pressed'))
    {           
        $('.featuredslick ul.slick-dots').find('.n-small-1').removeClass('n-small-1');
      $('.featuredslick ul.slick-dots').find('.p-small-1').removeClass('p-small-1'); 

        $('.featuredslick ul.slick-dots li.firstslide').addClass('oldpreee');

        firtsslde = $('.featuredslick ul.slick-dots li.pressed').attr('value') - 3;
        $('.featuredslick ul.slick-dots').find('.dot-index-' + firtsslde).addClass('p-small-1');

        fifthslde = Number($('.featuredslick ul.slick-dots li.p-small-1').attr('value')) + Number(3);
        $('.featuredslick ul.slick-dots').find('.dot-index-' + fifthslde).addClass('n-small-1');

        var pressctr = $('.featuredslick ul.slick-dots').find('.lastslide').attr('value') - $('.featuredslick ul.slick-dots').find('.n-small-1').attr('value') ;
        var pressctr2 = pressctr * 18;
        transformXIntervalPrev = $('.featuredslick ul.slick-dots').attr('value') - pressctr2;           
        $('.featuredslick ul.slick-dots').css('transform', 'translateX(-' + transformXIntervalPrev + 'px)');

        }
    else if($('.featuredslick ul.slick-dots li.pressed').hasClass('thirdtolast') || ($('.featuredslick ul.slick-dots li.pressed').hasClass('secondtolast')))
        {
          $('.featuredslick ul.slick-dots').addClass('wontNext');               
          $('.featuredslick ul.slick-dots').find('.n-small-1').removeClass('n-small-1');
          $('.featuredslick ul.slick-dots').find('.p-small-1').removeClass('p-small-1');            
          $('.featuredslick ul.slick-dots li.lastslide').addClass('n-small-1'); 
          var firstslide3 = $('.featuredslick ul.slick-dots li.n-small-1').attr('value') - 5; 
          $('.featuredslick ul.slick-dots').find('.dot-index-' + firstslide3).addClass('p-small-1');
          var pressctr = $('.featuredslick ul.slick-dots').find('.p-small-1').attr('value') - $('.featuredslick ul.slick-dots').find('.firstslide').attr('value');
          transformXIntervalNext = 18 * pressctr;          
          $('.featuredslick ul.slick-dots').css('transform', 'translateX(-'+ transformXIntervalNext +'px)');
        }
        else if($('.featuredslick ul.slick-dots li.pressed').hasClass('secondtofirst') || ($('.featuredslick ul.slick-dots li.pressed').hasClass('thirdtofirst')))
        {             
          $('.featuredslick ul.slick-dots').find('.n-small-1').removeClass('n-small-1');
        $('.featuredslick ul.slick-dots').find('.p-small-1').removeClass('p-small-1');            
          $('.featuredslick ul.slick-dots li.firstslide').addClass('p-small-1'); 
          $('.featuredslick ul.slick-dots').find('.dot-index-4').addClass('n-small-1');
        } 
        else
        { $('.featuredslick ul.slick-dots').find('.p-small-1').removeClass('p-small-1');
          $('.featuredslick ul.slick-dots').find('.n-small-1').removeClass('n-small-1');
          firtsslde = Number($('.featuredslick ul.slick-dots li.pressed').attr('value')) - 3;
          $('.featuredslick ul.slick-dots').find('.dot-index-' + firtsslde).addClass('p-small-1');
          fifthslde = Number($('.featuredslick ul.slick-dots li.p-small-1').attr('value')) + Number(3);  
          $('.featuredslick ul.slick-dots').find('.dot-index-' + fifthslde).addClass('n-small-1'); 
          var pressctr = $('.featuredslick ul.slick-dots').find('.p-small-1').attr('value') - $('.featuredslick ul.slick-dots').find('.firstslide').attr('value');
          transformXIntervalNext = 18 * pressctr;           
          $('.featuredslick ul.slick-dots').css('transform', 'translateX(-' + transformXIntervalNext + 'px)');
        } 
      } 
      $('.featuredslick ul.slick-dots').attr('value', transformXIntervalNext );
  }
  else
  { $('.featuredslick ul.slick-dots').removeClass('wontNext');
      if ($('.featuredslick ul.slick-dots').hasClass('wontPrev')) {
      }
      else
      { 
        if($('.featuredslick ul.slick-dots li.firstslide').hasClass('p-small-1'))
    {       
        $('.featuredslick ul.slick-dots li.firstslide').addClass('p-small-1');
      $('.featuredslick ul.slick-dots').find('.dot-index-4').addClass('n-small-1');
    }
    else if ($('.featuredslick ul.slick-dots li.pressed').hasClass('secondtolast'))
        { 
        $('.featuredslick ul.slick-dots').addClass('wontNext'); 
        }
      else if($('.featuredslick ul.slick-dots li.secondtofirst').hasClass('p-small-1') || $('.featuredslick ul.slick-dots li.thirdtofirst').hasClass('p-small-1'))
      { $('.featuredslick ul.slick-dots').find('.n-small-1').removeClass('n-small-1');
        $('.featuredslick ul.slick-dots').find('.p-small-1').removeClass('p-small-1');            
        $('.featuredslick ul.slick-dots li.firstslide').addClass('p-small-1'); 
        $('.featuredslick ul.slick-dots').find('.dot-index-4').addClass('n-small-1');
        $('.featuredslick ul.slick-dots').addClass('wontPrev');             
        $('.featuredslick ul.slick-dots').css('transform', 'translateX(0px)');

      } 
      else
      { if( $('.featuredslick ul.slick-dots li.lastslide').hasClass('pressed'))
          {
            $('.featuredslick ul.slick-dots').find('.n-small-1').removeClass('n-small-1');
          $('.featuredslick ul.slick-dots').find('.p-small-1').removeClass('p-small-1');            
            $('.featuredslick ul.slick-dots li.lastslide').addClass('n-small-1'); 
            var firstslide3 = $('.featuredslick ul.slick-dots li.n-small-1').attr('value') - 5; 
            $('.featuredslick ul.slick-dots').find('.dot-index-' + firstslide3).addClass('p-small-1');
          }
          else
          {
          $('.featuredslick ul.slick-dots').find('.p-small-1').removeClass('p-small-1');
          $('.featuredslick ul.slick-dots').find('.n-small-1').removeClass('n-small-1');
          firtsslde = Number($('.featuredslick ul.slick-dots li.pressed').attr('value')) - 3;
          $('.featuredslick ul.slick-dots').find('.dot-index-' + firtsslde).addClass('p-small-1');
          fifthslde = Number($('.featuredslick ul.slick-dots li.p-small-1').attr('value')) + Number(3);  
          $('.featuredslick ul.slick-dots').find('.dot-index-' + fifthslde).addClass('n-small-1'); 
          
          var pressctr2 = $('.featuredslick ul.slick-dots').find('.pressed').attr('value') - 3;
          var pressctr3 = pressctr2 * 18;
          $('.featuredslick ul.slick-dots').css('transform', 'translateX(-' + pressctr3 + 'px)');
          }
        }
      }
    }
  }  
}); 

$('.featuredslick.lists1').slick({
	dots: false,
	infinite: false,
	arrows: true,
	speed: 300,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	slidesToShow: 3.9,
	slidesToScroll: 4,
	responsive: [
	{
	  breakpoint: 700,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 3
	  }
	},
	{
	  breakpoint: 500,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 2
	  }
	}
  ]  
});

$('.featuredslick.lists2').slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 300,
  prevArrow: $('.prev2'),
  nextArrow: $('.next2'),
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
	{
	  breakpoint: 700,
	  settings: {
		slidesToShow: 4,
		slidesToScroll: 4
	  }
	},
	{
	  breakpoint: 500,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 2
	  }
	}
  ]  
});

$('.featuredslick').on('setPosition', function (event, slick) {
  if(fivedotsenable == 1)
  {
   if($('.featuredslick .slick-dots-container').hasClass('dotsdone')) {}
   else
    { $('.featuredslick ul.slick-dots').wrap("<div class='slick-dots-container'></div>");
      $('.featuredslick .slick-dots-container').addClass('dotsdone');
      $('.featuredslick .slick-dots-container .slick-dots').addClass('fivedotslide');
      $('.featuredslick ul.slick-dots').find('li').each(function () {
        index++;
        var index2 = index - 1; 
        $(this).addClass('dot-index-' + index2);
        $(this).attr('value', index);
    });
    $('.featuredslick ul.slick-dots').css('transform', 'translateX(0)');
    $('.featuredslick ul.slick-dots li.slick-active').addClass('pressed p-small-1');
    $('.featuredslick ul.slick-dots li:last-child').addClass('lastslide');
    $('.featuredslick ul.slick-dots li:first-child').addClass('firstslide');
    $('.featuredslick ul.slick-dots li:nth-child(5)').addClass('n-small-1');
    $('.featuredslick ul.slick-dots li:nth-child(3)').addClass('thirdtofirst');
    $('.featuredslick ul.slick-dots li:nth-child(2)').addClass('secondtofirst');
    var nottoscroll = $( ".featuredslick ul.slick-dots li.lastslide").attr('value') - 3;
    $('.featuredslick ul.slick-dots').find('.dot-index-' + nottoscroll).addClass('thirdtolast');
    var nottoscroll2 = $( ".featuredslick ul.slick-dots li.lastslide").attr('value') - 2;
    $('.featuredslick ul.slick-dots').find('.dot-index-' + nottoscroll2).addClass('secondtolast');  
  }
  } 
  slick.$slides.css('height', slick.$slideTrack.height() + 'px');

});
var sliderctr2 = 0;
  $('.featuredslick.prodlists1 .slick-slide').each(function(){ 
    sliderctr2++;
    $(this).parents('.featuredslick.prodlists1').attr('value', sliderctr2); //.addClass('value' + sliderctr2);
  }); 
$('.featuredslick.prodlists1').each(function(){ 
  var slidevalue = $('.featuredslick.prodlists1').attr('value');
  if($(window).width() > 1400){
  if (slidevalue < 11) { 
    $(this).addClass('lowerthan10');
     }
  else { 
    $(this).addClass('morethan10'); 
  } 
  }
  else if($(window).width() > 1200){
  if (slidevalue < 9) { 
    $(this).addClass('lowerthan10');
     }
  else { 
    $(this).addClass('morethan10'); 
  } 
  }
  else {
	   if (slidevalue < 7) { 
    $(this).addClass('lowerthan10');
     }
  else { 
    $(this).addClass('morethan10'); 
  } 
  }
});


$(window).on('resize orientationChange', function() {
  if(fivedotsenable == 1)
  {
  index = 0;  
  $('.featuredslick ul.slick-dots').css('transform', 'translateX(0px)');
  $('.featuredslick ul.slick-dots').removeClass('nextclick');
  $('.featuredslick ul.slick-dots .slick-active').removeClass('slick-active');
  $('.featuredslick ul.slick-dots .pressed').removeClass('pressed');
  $('.featuredslick ul.slick-dots .oldpres').removeClass('oldpres');
  $('.featuredslick ul.slick-dots .n-small-1').removeClass('n-small-1');
  $('.featuredslick ul.slick-dots .p-small-1').removeClass('p-small-1');
  $('.featuredslick ul.slick-dots li:first-child').addClass('slick-active pressed p-small-1');
  $('.featuredslick ul.slick-dots li:nth-child(5)').addClass('n-small-1');
  $('.featuredslick .slick-list .slick-track').css('transform', 'translate3d(0px, 0px, 0px)');
  $('.featuredslick .slick-track .slick-active').removeClass('slick-active');
  $('.featuredslick .slick-track .slick-current').removeClass('slick-current');
  $('.featuredslick .slick-track .slick-slide:first-child').addClass('slick-current slick-active');
  $('.featuredslick .slick-track .slick-slide:nth-child(2), .featuredslick .slick-track .slick-slide:nth-child(3), .featuredslick .slick-track .slick-slide:nth-child(4)').addClass('slick-active');
  }
});

$('.featuredslick').each(function(){

  $('.featuredslick ul.slick-dots li').each(function() {
  dotsnum++;
 });  



 if(dotsnum <= 5) 
 { fivedotsenable = 0; }
 else { fivedotsenable = 1; }   

});
});
