$(document).ready(function(){
	var mp3_location = "mp3/";

	var sounds = [
		{
			title:"Stop ! M.R. Time.",
			file: "stop_mrtime.mp3"
		}
		// Add new sounds here, and resources in mp3/ 
	];



	var container = $(".sounds-container");

	for (i in sounds) {
		var current_sound = sounds[i];
		var html_text = "<div class='col-md-3 sound-cell-box'>"+
							"<div class='sound-cell'>"+
								current_sound.title+
							"<audio src='"+mp3_location+current_sound.file+"' preload='auto'>"+
							"</div>"
						"</div>";

		container.append(html_text);
		/*current_audio = container.children(".sound-cell").last().children("audio").last()[0];
		current_audio.onplaying = function() {
  			$(this).isPlaying = true;
		};
		current_audio.onpause = function() {
  			$(this).isPlaying = false;
		};
		$(this).isPlaying = false;*/
	}



    $("h1").click(function(){
        console.log("toto");
    });

    $(".sound-cell").click(function(){
        triggered_audio = $(this).find("audio")[0];
        console.log(triggered_audio);
    //  if ($(this).isPlaying) {
    //		triggered_audio.pause()
  	//	} else {
    		triggered_audio.play();
    //  }
    });
});