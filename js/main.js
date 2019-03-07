'use strict';

(function($){

	$('.header__link').click(function(e) {
		e.preventDefault();

		var target = $(this.hash);

		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000)
	});

	var scrolled;
		window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 10){
        $('.header__fixed').css('background', '#999dc7'),
        $('.header__link').css('color', '#fff')
    }
    if(scrolled < 10){
        $('.header__fixed').css({'background': ''})
        $('.header__link').css('color', '');
    }
}

	$('.reviews__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});

	$().fancybox({
		selector: '.portfolio__pictures--elem:visible > a'
	});


	$(function(){
	    var $portfolio__pictures = $('.portfolio__pictures').isotope({
			itemSelector: '.portfolio__pictures--elem',
			masonry: {
				gutter: 30
			}
		});
		  $('#loadMore').click(function(){
	    var html = '<div class="portfolio__pictures--add"></div>';
	    var newItems = $(html);
	    $portfolio__pictures.append(newItems).isotope('appended',newItems);
	  });
		  
  var initShow = 6; //number of images loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $portfolio__pictures.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $portfolio__pictures.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $portfolio__pictures.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      $("#loadMore").hide();
    } 
  else {
      $("#loadMore").show();
    };

  }

  //when load more button clicked
  $("#loadMore").click(function() {
  	$('.portfolio').css('height', 'auto');
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      j$('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });
});


	$(document).ready(function(){
  		$('#hamburger').click(function(e) {
	  		e.stopPropagation();
	  			$('.menu__mobile').slideToggle(function(){
		  			$('#hamburger').css('color', '#fff');
		  			if($(this).css('display') === 'none') {
		  				$('#hamburger').css('color', 'black');
		  			}
	  			});
	  		});


	  	$(document).click(function(e){
	  		var menu = $('.menu__mobile');
	  		if (menu.has(e.target).length === 0) {
	  			menu.hide();
	  		}
	  		$('#hamburger').css('color', 'black');
	  	});
	});


})(jQuery);