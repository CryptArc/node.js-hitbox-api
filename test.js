var hb = require("./index.js");
//var hb = require("hitbox-api");

hb.media(function(err, res, data){
	console.log(err, res.statusCode, data);
});

hb.mediaUser("GamingTom", function(err, res, data){
	console.log(err, res.statusCode, data);
});

hb.mediaFollowing("GamingTom", function(err, res, data){
	console.log(err, res.statusCode, data);
});

hb.user("GamingTom", function(err, res, data){
	console.log(err, res.statusCode, data);
});

hb.followers("GamingTom", "0", "20", function(err, res, data){
	console.log(err, res.statusCode, data);
});

hb.games(function(err, res, data){
	console.log(err, res.statusCode, data);
});

hb.teams(function(err, res, data){
	console.log(err, res.statusCode, data);
});

hb.team("hitbox", function(err, res, data){
	console.log(err, res.statusCode, data);
});

/*hb.API.authToken("username", "password", "desktop", function(err, res, data){
	console.log(err, res, data);
});*/

//id3();

//Example Code:

/*hb.mediaFollowing("GamingTom", function(err, res, data){
	if (err == "err01"){
		console.log(err + " - Username does not exist or is not activated.");
	}
	else if (err == "err02"){
		console.log(err + " - No streams online.");
	}
	else if (! err){
		for (var i = 0; i < data.livestream.length; i++) {
			console.log(i+1 + ". - " + data.livestream[i].media_user_name + " - " + data.livestream[i].media_views + " Viewers - " + data.livestream[i].media_status);
		};
	};
});*/