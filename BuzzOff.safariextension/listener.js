function buzzoff(){


	var stories = document.getElementsByClassName("fsm fwn fcg");
	var story;
	alert("called buzzoff");
	for(var i=0; i < stories.length; i++){
		story = stories[i];
		if (story.value.toLowerCase().indexOf("buzzfeed.com") !== -1){
			alert("called story");
	    	killStories(story);
    	}
	}

	stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16 _x72");
	for(var i=0; i < stories.length; i++){
		story = stories[i];
		if (story.value.toLowerCase().indexOf("buzzfeed.com") !== -1){
	    	killStories(story);
    	}
	}

	stories = document.getElementsByClassName("_4-u2 mbm _5jmm _5pat _5v3q _5x16");
	for(var j=0; i < stories.length; i++){
		story = stories[i];
		if (story.value.toLowerCase().indexOf("buzzfeed.com") !== -1){
	    	killStories(story);
    	}
	}

	stories = document.getElementsByClassName("timelineUnitContainer pagesTimelinePinpost");
	for(var k=0; i < stories.length; i++){
		story = stories[i];
		if (story.value.toLowerCase().indexOf("buzzfeed.com") !== -1){
	    	killStories(story);
    	}
	}

}

function killStories(item){
	alert("called");
	// var elems = item.getElementsByClassName("fsm fwn fcg");
	item.style.opacity = "0.0";
	 item.style.display = "None";

	// var post;
	// for(var i=0; i < elems.length; i++){
	//     post = stories[i];

	// }
}
alert(document.title;)

if (document.title.toLowerCase().indexOf("about:: blank")!==-1){
	buzzoff();
}