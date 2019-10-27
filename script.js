// Show the first tab and hide the rest
$(document).ready(function(){
$('#tabs-nav li:first-child').addClass('active');
$('.service-block-content-text').hide();
$('.service-block-content-text:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.service-block-content-text').hide();
  
  let activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


function setSlider(){
	
	$(".slider").each( function(){
		
		var $slider = $(this),
				$itemscontainer = $slider.find(".slider-items-container");
		
		if ($itemscontainer.find(".slider-item.actives").length == 0){
			$itemscontainer.find(".slider-item").first().addClass("actives");
		}
		
		function setWidth(){
			var totalWidth = 0
			
			$($itemscontainer).find(".slider-item").each( function(){
				totalWidth += $(this).outerWidth();
			});
			
			$itemscontainer.width(totalWidth);
			
		}
		function setTransform(){
			
			var $activeItem = $itemscontainer.find(".slider-item.actives"),
					activeItemOffset = $activeItem.offset().left,
					itemsContainerOffset = $itemscontainer.offset().left,
					totalOffset = activeItemOffset - itemsContainerOffset
			
			$itemscontainer.css({"transform": "translate( -"+totalOffset+"px, 0px)"})
			
		}
		function nextSlide(){
			var activeItem = $itemscontainer.find(".slider-item.actives"),
					activeItemIndex = activeItem.index(),
					sliderItemTotal = $itemscontainer.find(".slider-item").length,
					nextSlide = 0;
			
			if (activeItemIndex + 1 > sliderItemTotal - 1){
				nextSlide = 0;
			}else{
				nextSlide = activeItemIndex + 1
			}
			
			var nextSlideSelect = $itemscontainer.find(".slider-item").eq(nextSlide),
					itemContainerOffset = $itemscontainer.offset().left,
					totalOffset = nextSlideSelect.offset().left - itemContainerOffset
			
			$itemscontainer.find(".slider-item.actives").removeClass("actives");
			nextSlideSelect.addClass("actives");
			$slider.find(".dots").find(".dot").removeClass("actives")
			$slider.find(".dots").find(".dot").eq(nextSlide).addClass("actives");
			$itemscontainer.css({"transform": "translate( -"+totalOffset+"px, 0px)"})
			
		}
		function prevSlide(){
			var activeItem = $itemscontainer.find(".slider-item.actives"),
					activeItemIndex = activeItem.index(),
					sliderItemTotal = $itemscontainer.find(".slider-item").length,
					nextSlide = 0;
			
			if (activeItemIndex - 1 < 0){
				nextSlide = sliderItemTotal - 1;
			}else{
				nextSlide = activeItemIndex - 1;
			}
			
			var nextSlideSelect = $itemscontainer.find(".slider-item").eq(nextSlide),
					itemContainerOffset = $itemscontainer.offset().left,
					totalOffset = nextSlideSelect.offset().left - itemContainerOffset
			
			$itemscontainer.find(".slider-item.actives").removeClass("actives");
			nextSlideSelect.addClass("actives");
			$slider.find(".dots").find(".dot").removeClass("actives")
			$slider.find(".dots").find(".dot").eq(nextSlide).addClass("actives");
			$itemscontainer.css({"transform": "translate( -"+totalOffset+"px, 0px)"})
			
		}
		function makeDots(){
			var activeItem = $itemscontainer.find(".slider-item.actives"),
					activeItemIndex = activeItem.index(),
					sliderItemTotal = $itemscontainer.find(".slider-item").length;
			
			for (i = 0; i < sliderItemTotal; i++){
				$slider.find(".dots").append("<div class='dot'></div>")
			}
			
			$slider.find(".dots").find(".dot").eq(activeItemIndex).addClass("actives")
			
		}
		
		setWidth();
		setTransform();
		makeDots();
		
		$(window).resize( function(){
					setWidth();
					setTransform();
		});
		
		var nextBtn = $slider.find(".controls").find(".next-btn"),
				prevBtn = $slider.find(".controls").find(".prev-btn");
		
		nextBtn.on('click', function(e){
			e.preventDefault();
			nextSlide();
		});
		
		prevBtn.on('click', function(e){
			e.preventDefault();
			prevSlide();
		});
		
		$slider.find(".dots").find(".dot").on('click', function(e){
			
			var dotIndex = $(this).index(),
					totalOffset = $itemscontainer.find(".slider-item").eq(dotIndex).offset().left - $itemscontainer.offset().left;
					
			$itemscontainer.find(".slider-item.actives").removeClass("actives");
			$itemscontainer.find(".slider-item").eq(dotIndex).addClass("actives");
			$slider.find(".dots").find(".dot").removeClass("actives");
			$(this).addClass("actives")
			
			$itemscontainer.css({"transform": "translate( -"+totalOffset+"px, 0px)"})
			
		});
		
	});
	
}

setSlider();

})