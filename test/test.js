var hb = require("../index.js");
var expect = require("expect.js");
//var hb = require("hitbox-api");

describe("Test", function() {
	it("Test 1: media", function(done){
		hb.media(function(err, res, data){
			//console.log(err, res.statusCode, data);
			expect(data).to.exist;
			done();
		});
	});

	it("Test 2: mediaUser", function(done){
		hb.mediaUser("GamingTom", function(err, res, data){
			expect(data).to.exist;
			done();
		});
	});

	it("Test 3: mediaFollowing", function(done){
		hb.mediaFollowing("GamingTom", function(err, res, data){
			expect(data).to.exist;
			done();
		});
	});

	it("Test 4: user", function(done){
		hb.user("GamingTom", function(err, res, data){
			expect(data).to.exist;
			done();
		});
	});

	it("Test 5: followers", function(done){
		hb.followers("GamingTom", "0", "20", function(err, res, data){
			expect(data).to.exist;
			done();
		});
	});

	it("Test 6: games", function(done){
		hb.games(function(err, res, data){
			done();
		});
	});

	/*it("Test 7: teams", function(done){
		hb.teams(function(err, res, data){
			done();
		});
	});*/

	it("Test 7: team", function(done){
		hb.team("hitbox", function(err, res, data){
			expect(data).to.exist;
			done();
		});
	});

});