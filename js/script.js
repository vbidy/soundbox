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
                    var html_text = "<div class='col-md-3 sound-cell-box'>"+
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
            console.log( "Failed to load sounds.json" )
            console.log(e);
        }
    });
}

function playSound(sound_id) {
    console.log(sound_id);
    $("#sound_"+sound_id)[0].play();
}

$(document).ready(function(){
    selectSounds('');

    $("#filter").keyup(function() {
        selectSounds(this.value);
        console.log( this.value )
    });
});