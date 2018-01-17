var mp3_location = "mp3/";
var container = $(".sounds-container");

function selectSounds(filter) {
    container.empty();
    $.ajax({
        url : 'conf/sounds.json',
        dataType : 'json',
        mimeType: "application/json",
        success : function(sounds) {
            for (i in sounds) {
                var current_sound = sounds[i];
                upper_current_sound_title = current_sound.title.toUpperCase();
                upper_filter = filter.toUpperCase();
                if ( (upper_current_sound_title.search(upper_filter) >= 0) || (filter == '') ) {
                    var html_text = "<div class='col-sm-6 col-md-4 col-lg-3 col-xl-2 sound-cell-box'>"+
                                        "<div class='sound-cell' onClick='playSound("+i+")'>"+
                                            current_sound.title+
                                            "<audio id=\"sound_"+i+"\" src='"+mp3_location+current_sound.file+"' preload='none'>"+
                                        "</div>"+
                                    "</div>";
                    container.append(html_text);
                }
            }
        },
        error : function(e) {
            console.log( "Failed to load sounds.json")
        }
    });
}

function playSound(sound_id) {
    // Stop all the other sounds
    html_sounds_available=container.children('div').find('audio');
    for (var i=0; i < html_sounds_available.length;i++) {
        sound=html_sounds_available[i];
        if (!$(sound)[0].paused){
            $(sound)[0].pause();
            $(sound)[0].currentTime = 0;
        }
    }
    // Play the sound
    $("#sound_"+sound_id)[0].play();
}

$(document).ready(function(){
    selectSounds('');

    $("#filter").keyup(function() {
        selectSounds(this.value);
    });
});