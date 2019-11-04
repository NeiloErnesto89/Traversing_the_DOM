//waits until page is ready
$(document).ready(function(){
  
//will display rgb value of selected panel in the reset panel
 $(".theButton").click(function(){
    var col = $(this).css('background-color');
  $('.superButton').text( col);

   });
});

/*

$(document).ready(function(){
 $('.theButton').click(function() {
 $("#panel .container").siblings().hide();
   })

 //hides only the panel that was clicked
  $(".theButton").click(function(){
  $(this).hide();
   })
   


//adds  a fadeTo to all panels when a panel is clicked
$(".theButton").click(function(){
	$  ("#panel .container").siblings().fadeTo(1000, .5);
   });


//restores all panels to full opacity when reset button clicked 
$(".superButton").click(function(){
	$("#panel .container").siblings().fadeTo(1000,1);	
   });

//turns panel background black on mouseenter
$(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
   });

 //returns to original colour on mouseout 
$(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");
   });

     

}); */ 