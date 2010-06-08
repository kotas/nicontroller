safari.self.addEventListener("message", function (ev) {
    if (ev.name != "button_pushed") return;

    var player = document.getElementById("flvplayer");
    if (!player) return;

    switch (ev.message) {
        case "play":
            player.ext_play(true);
            break;
        case "pause":
            player.ext_play(false);
            break;
        case "stop":
            player.ext_play(false);
            player.ext_setPlayheadTime(0);
            break;
        case "rewind":
            player.ext_setPlayheadTime(0);
            break;
        case "full":
            player.ext_setVideoSize(player.ext_getVideoSize() == "fit" ? "normal" : "fit");
            break;
        case "mute":
            player.ext_setMute(!player.ext_isMute());
            break;
    }
}, false);
