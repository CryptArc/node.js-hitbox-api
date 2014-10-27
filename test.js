var hb = require("./index.js");
//var hb = require("hitbox-api");

describe("Test", function() {
	it("Test 1: media", function(){
		hb.media(function(err, res, data){
			console.log(err, res.statusCode, data);
		});
	});

	it("Test 2: mediaUser", function(){
		hb.mediaUser("GamingTom", function(err, res, data){
			console.log(err, res.statusCode, data);
		});
	});

	it("Test 3: mediaFollowing", function(){
		hb.mediaFollowing("GamingTom", function(err, res, data){
			console.log(err, res.statusCode, data);
		});
	});

	it("Test 4: user", function(){
		hb.user("GamingTom", function(err, res, data){
			console.log(err, res.statusCode, data);
		});
	});

	it("Test 5: followers", function(){
		hb.followers("GamingTom", "0", "20", function(err, res, data){
			console.log(err, res.statusCode, data);
		});
	});

	it("Test 6: games", function(){
		hb.games(function(err, res, data){
			console.log(err, res.statusCode, data);
		});
	});

	it("Test 7: teams", function(){
		hb.teams(function(err, res, data){
			console.log(err, res.statusCode, data);
		});
	});

	it("Test 8: team", function(){
		hb.team("hitbox", function(err, res, data){
			console.log(err, res.statusCode, data);
		});
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

});