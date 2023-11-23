$(document).ready(function () {
        if ($(window).width() > 991){
        $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
    }
});

$(".audio-div audio").on('play',function(){
  var parent = $(this).parent();
  $(parent).toggleClass('active');
})
$(".audio-div audio").on('pause',function(){
  var parent = $(this).parent();
  $(parent).toggleClass('active');
})


jQuery(".carousel1").owlCarousel({
    autoplay: false,
    rewind: true,
    loop: false,
    /* use rewind if you don't want loop */
    margin: 0, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items:4
      }
    }
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


// vertical carousel 

$(".next-img").click(function(){
    var img;
    var count = 0;
    var scrollTop = $(".vertical-carousel").scrollTop() + 85;
    $(".vertical-carousel").scrollTop(scrollTop);	  
})

$(".pre-img").click(function(){
  var img;
  var count = 0;
  var scrollTop = $(".vertical-carousel").scrollTop() - 85;
  $(".vertical-carousel").scrollTop(scrollTop);
})

$(".remove-btn").click(function(){
  var parent = $(this).parent().parent().parent().parent().parent();
  $(parent).remove();
});

$(".vector-icon").click(function(){
  $(this).toggleClass('active');
});

if ($(window).width() < 767) {
  $(".card-paragraph.author-detail").each(function(){
    var text = $(this).text();
    if (text.length > 115) {
      var finded = text.substring(0,115) + "...";
      $(this).text(finded);
    }
  })
}


// navbar hide and show

// $('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fas fa-chevron-up fas fa-chevron-down");
});

//-----JS for Price Range slider-----

// $(function() {

// 	// $( ".slider-range" ).slider({
// 	//   range: true,
// 	//   min: 10,
// 	//   max: 100,
// 	//   values: [ 32, 68 ],
// 	//   slide: function( event, ui ) {
// 	// 	  $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//   //     $("#slider-range-values").attr("min",ui.values[0]);
//   //     $("#slider-range-values").attr("max",ui.values[1]);
//   //     applyFilter();
// 	//   }
// 	// });
//   // $("#slider-range-values").attr("min",32);
//   // $("#slider-range-values").attr("max",68);
// 	// $( "#amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) + " - $" + $( ".slider-range" ).slider( "values", 1 ) );


//   // slider-rangeYear
// 	$( ".slider-rangeYear" ).slider({
// 	  range: true,
// 	  min: 0,
// 	  max: 400,
// 	  values: [ 100, 300 ],
// 	  slide: function( event, ui ) {
//       console.log(ui.values[0]);
//       console.log(ui.values[1]);
//       // if (Math.abs(ui.values[0] - ui.values[1]) > 98) {
//         var leftSideLeft = "0%";
//         var rightSideLeft = "25%";
//         var topwidth = "0%";
//         if (ui.values[0] >= 0 && ui.values[0] <= 99) {
//           leftSideLeft ="0%";
//           ui.values[0] = 0;
//         }else if (ui.values[0] >= 100 && ui.values[0] <= 199) {
//           leftSideLeft = "25%";
//           ui.values[0] = 100;
//         }else if (ui.values[0] >= 200 && ui.values[0] <= 299) {
//           leftSideLeft = "50%";
//           ui.values[0] = 200;
//         }else if (ui.values[0] >= 300 && ui.values[0] <= 399) {
//           leftSideLeft = "75%";
//           ui.values[0] = 300;
//         }
//         if (ui.values[1] > 0 && ui.values[1] <= 100) {
//           rightSideLeft = "25%";
//           ui.values[1] = 100;
//         }else if (ui.values[1] > 100 && ui.values[1] <= 200) {
//           rightSideLeft = "50%";
//           ui.values[1] = 200;
//         }else if (ui.values[1] > 200 && ui.values[1] <= 300) {
//           rightSideLeft = "75%";
//           ui.values[1] = 300;
//         }else if (ui.values[1] > 300 && ui.values[1] <= 400) {
//           rightSideLeft ="100%";
//           ui.values[1] = 400;
//         }
//         if (Math.abs(ui.values[0] - ui.values[1]) == 100) {
//           topwidth ="25%";
//         }else if (Math.abs(ui.values[0] - ui.values[1]) == 200) {
//           topwidth ="50%";
//         }else if (Math.abs(ui.values[0] - ui.values[1]) == 300) {
//           topwidth ="75%";
//         }else if (Math.abs(ui.values[0] - ui.values[1]) == 400) {
//           topwidth ="100%";
//         }
//         $(".slider-rangeYear .ui-slider-range").css("width",topwidth);
//         $(".slider-rangeYear .ui-slider-range").css("left",leftSideLeft);
//         $(".slider-rangeYear").each(function(){
//           $($(this).find(".ui-slider-handle")[0]).css("left",leftSideLeft);
//         })
//         $(".slider-rangeYear").each(function(){
//           $($(this).find(".ui-slider-handle")[1]).css("left",rightSideLeft);
//         })
//         $("#slider-rangeYear-values").attr("min",ui.values[0]);
//         $("#slider-rangeYear-values").attr("max",ui.values[1]);
//         applyFilter();
//         return false;
//       // }else{
//         $( "#amount" ).val( "$" + 200 + " - $" + 400 );
//         console.log();
//         return false;
//       // }
// 	  }
// 	});
//   $("#slider-rangeYear-values").attr("min",100);
//   $("#slider-rangeYear-values").attr("max",300);
// 	$( "#amount" ).val( "$" + $( ".slider-rangeYear" ).slider( "values", 0 ) + " - $" + $( ".slider-rangeYear" ).slider( "values", 1 ) );

// });

$(function() {
  var leftSideLeft = "25%";
  var rightSideLeft = "75%";
  var topwidth = "50%";
  $(".slider-rangeYear .dot-ellipseimg").click(function(ui) {
    var dataLeft = parseInt($(this).attr("data-left"));
    var firstLeft = parseInt($("#slider-rangeYear-values").attr("min"));
    var lastLeft = parseInt($("#slider-rangeYear-values").attr("max"));
    if (dataLeft > firstLeft &&  dataLeft > lastLeft) {
      rightSideLeft = dataLeft + "%";
    }else if (dataLeft < firstLeft &&  dataLeft < lastLeft){
      leftSideLeft = dataLeft + "%";
    }else if (dataLeft > firstLeft &&  dataLeft < lastLeft){
      var differentFromFirst = Math.abs(dataLeft - firstLeft);
      var differentFromLast = Math.abs(dataLeft - lastLeft);
      if (differentFromFirst < differentFromLast) {
        leftSideLeft = dataLeft + "%";
      }else {
        rightSideLeft = dataLeft + "%";
      }
    }
    $("#slider-rangeYear-values").attr("min",parseInt(leftSideLeft));
    $("#slider-rangeYear-values").attr("max",parseInt(rightSideLeft));
    topwidth = Math.abs(parseInt(rightSideLeft) - parseInt(leftSideLeft)) + "%";
    $(".slider-rangeYear .ui-slider-range").css("width",topwidth);
    $(".slider-rangeYear .ui-slider-range").css("left",leftSideLeft);
    $(".slider-rangeYear").each(function(){
      $($(this).find(".ui-slider-handle")[0]).css("left","calc(" + leftSideLeft + " - 6px)");
    })
    $(".slider-rangeYear").each(function(){
      if (parseInt(rightSideLeft) == 100) {
        $($(this).find(".ui-slider-handle")[1]).css("left","calc(" + rightSideLeft + " - 14px)");
      }else{      
        $($(this).find(".ui-slider-handle")[1]).css("left","calc(" + rightSideLeft + " - 6px)");
      }
    })
    applyFilter();
  //   return false;
  });
});

(function($) {
  $(document).ready(function() {
    $('#priceRangeNew').each(function() {
      var slidervalue = $(this).attr('data-slider-value');
      var separator = slidervalue.indexOf(',');
      if (separator !== -1) {
          slidervalue = slidervalue.split(',');
          slidervalue.forEach(function(item, i, arr) {
              arr[i] = parseFloat(item);
          });
      } else {
          slidervalue = parseFloat(slidervalue);
      }

      $(this).slider({
          formatter: function(slidervalue) {
              return '$' + slidervalue;
          },
          min: parseFloat($(this).attr('data-slider-min')),
          max: parseFloat($(this).attr('data-slider-max')),
          range: $(this).attr('data-slider-range'),
          value: slidervalue,
          tooltip_split: $(this).attr('data-slider-tooltip_split'),
          tooltip: $(this).attr('data-slider-tooltip'),
          tooltip_position: 'bottom'
      });

      $("#priceRangeNew").on('change', function() {
          var maxvalue = $(".price-range-slidernew .tooltip-max .tooltip-inner").text().replace(/\$/g, "");
          maxparse = parseInt(maxvalue);
          minvalue = $(".price-range-slidernew .tooltip-min .tooltip-inner").text().replace(/\$/g, "");
          minparse = parseInt(minvalue);
          $("#slider-range-values").attr("min",minparse);
          $("#slider-range-values").attr("max",maxparse);
          applyFilter();
      });

      //Onchange function checkbox on/off
    });
    $('#priceRangeNew1').each(function() {
      var slidervalue = $(this).attr('data-slider-value');
      var separator = slidervalue.indexOf(',');
      if (separator !== -1) {
          slidervalue = slidervalue.split(',');
          slidervalue.forEach(function(item, i, arr) {
              arr[i] = parseFloat(item);
          });
      } else {
          slidervalue = parseFloat(slidervalue);
      }

      $(this).slider({
          formatter: function(slidervalue) {
              return '$' + slidervalue;
          },
          min: parseFloat($(this).attr('data-slider-min')),
          max: parseFloat($(this).attr('data-slider-max')),
          range: $(this).attr('data-slider-range'),
          value: slidervalue,
          tooltip_split: $(this).attr('data-slider-tooltip_split'),
          tooltip: $(this).attr('data-slider-tooltip'),
          tooltip_position: 'bottom'
      });

      $("#priceRangeNew1").on('change', function() {
          var maxvalue = $(".price-range-slidernew1 .tooltip-max .tooltip-inner").text().replace(/\$/g, "");
          maxparse = parseInt(maxvalue);
          minvalue = $(".price-range-slidernew1 .tooltip-min .tooltip-inner").text().replace(/\$/g, "");
          minparse = parseInt(minvalue);
          $("#slider-range-values").attr("min",minparse);
          $("#slider-range-values").attr("max",maxparse);
          applyFilter();
      });

      //Onchange function checkbox on/off
    });
  });
})(jQuery);