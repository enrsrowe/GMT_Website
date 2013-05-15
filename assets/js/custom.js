$(document).ready(function(){

/*Setup */
	$(".hiddentext").hide();                                  //Hide all hidden text.
  $(".specification").hide();                               //Hide all the specifications.

/* Product Hidden text and hover effect */
  $(".productslide").hover(function() {
    $(this).toggleClass("select");                          //Select Effect.
    $(this).find(".hiddentext").stop().slideToggle("");     //Slide to reveal text.
  }); 

//Stop stops the build up of effects.
//parent goes up one. parents goes up many.
//child goes down one. find looks down many.
//delay waits for x ms.

/* Show Description Hide Specification */
  $(".productslide .btn-specification").click(function() {
    $(this).parent().parent().find(".description").stop().fadeOut(500);
    $(this).parent().parent().find(".specification").stop().delay(500).fadeIn(500);
  }); 

/* Show Specification Hide Description */
  $(".productslide .btn-description").click(function() {
    $(this).parent().parent().find(".specification").stop().fadeOut(500);
    $(this).parent().parent().find(".description").stop().delay(500).fadeIn(500);  
  }); 




});