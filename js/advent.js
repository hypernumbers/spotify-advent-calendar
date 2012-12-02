// Global variable
var cookie = {};

// Basic utility functions
var naughtymessage = function () {
	var rand = Math.floor(Math.random() * 5);
	switch(rand) {
		case 0: return "patience...";
		case 1: return "no pressies for you...";
		case 2: return "I've telt Santa...";
		case 3: return "naughty, naughty...";
		case 4: return "yer on the naughty list...";
	}
}

var click_door_fn = function (e) {
	var i, date, day, month;

	date = new Date();

	month = date.getUTCMonth();
	day = date.getUTCDate();
	
	door = e.currentTarget.innerHTML;

	// only play tunes in December
	if ((month === 11) && (door <= day)) {
		$("#" + door).toggleClass("opendoor", 1000, "easeOutSine");
		// now write the cookie
		cookie[door] = true;
		write_cookie();
	} else {
		e.currentTarget.innerHTML = naughtymessage();
	}

}

var setup = function (n, song) {

	var sp, models, views, single_track, single_track_playlist,
	single_track_player, single_track_player_HTML;

	sp = getSpotifyApi(1);
	
	models = sp.require("sp://import/scripts/api/models");
	views = sp.require("sp://import/scripts/api/views");

	single_track = models.Track.fromURI(song); 
	
	single_track_playlist = new models.Playlist();
	single_track_playlist.add(single_track);
	
	single_track_player = new views.Player();
	single_track_player.track = null;
	single_track_player.context = single_track_playlist;
	single_track_player_HTML = $("#" + n)[0];
	single_track_player_HTML.appendChild(single_track_player.node);
	single_track_player_HTML.firstChild.childNodes[1].innerHTML = n;
};

var write_cookie = function () {
	localStorage.setItem("opendoors", JSON.stringify(cookie));
};

var get_blank_cookie = function () {
	var blank = {1:  false, 2:  false, 3:  false, 4:  false, 5:  false, 6:  false, 7:  false, 8:  false, 9:  false, 10: false,
		11: false, 12: false, 13: false, 14: false, 15: false, 16: false, 17: false, 18: false, 19: false, 20: false,
		21: false, 22: false, 23: false, 24: false, 25: false};
	return blank;
};

// Core functions
init = function () {
	if (localStorage.getItem("opendoors") === null) {
		localStorage.setItem("opendoors", JSON.stringify(get_blank_cookie()));	
	}
	cookie = JSON.parse(localStorage.getItem("opendoors"));
};

setup_songs = function () {

	var i, date, day, month;

	date = new Date();

	month = date.getUTCMonth();
	day = date.getUTCDate();
	
	// only play tunes in December, etc
	if (month === 11) {
		for (i = 1; i <= day; i = i + 1) {
			setup(i, songs.playlist[i]);
		}
		for (i = day + 1; i < 26; i = i + 1) {
			setup(i, songs.naughtysong);
		}
	} else {
		for (i = 1; i < 26; i = i + 1) {
			setup(i, songs.naughtysong);
		}		
	}
};

layout_doors = function () {

	var order, width, height, buttonw, buttonh, cookie, padding, 
	i, j, door, n, xoffset, yoffset;		

	// just random, etc
	order = [5, 1, 3, 14, 22, 13, 6, 23, 18, 16, 17, 10, 2,
			 4, 15, 21, 11, 12, 9, 25, 24, 8, 19, 7, 20];

	padding = 20;

	width = $(window).width();
	height = $(window).height();

	buttonw = Math.floor(width  - 6 * padding)/5;
	buttonh = Math.floor(height - 6 * padding)/5;

	$(".sp-player-button").css("width",  buttonw);
	$(".sp-player-button").css("height", buttonh);

	n = 0;
	xoffset = padding;
	yoffset = padding;

	for (i = 1; i < 6; i = i + 1) {
		for (j = 1; j < 6; j = j + 1) {
			door = order[n];
			$("#" + door).css("left", xoffset + "px");
			$("#" + door).css("top",  yoffset + "px");
			xoffset = xoffset + buttonw + padding; 
			n = n + 1;
		}
		xoffset = padding;
		yoffset = yoffset + buttonh + padding;
	}
};

var display_doors = function () {

    var i, date, day, month;

	date = new Date();

	month = date.getUTCMonth();
	day = date.getUTCDate();

	if (month === 11) {
		for (i = 1; i <= day; i = i + 1) {
			if (cookie[i]) {
				$("#" + i).toggleClass("opendoor", 1000, "easeOutSine");
			}
		}
	}

	$(".sp-player-button").click(click_door_fn);
	$(".door").css("display", "block");	
}

window.onload = function() {
	
	init();
	setup_songs();
	layout_doors();
	display_doors();
	$(window).resize(layout_doors);

};