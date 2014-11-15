function blocker(burl, recursive){
	$(".fsm, .fwn, .fcg:contains(buzzfeed)").insertBefore('<!--').insertAfter('-->')
}


/*
bind clickHandler function for each 
existing element of the document.
clickHandler will trigger when user
click on a element.
*/
$(document).on("click",clickHandler);
