# Node.js [hitbox.tv](http://hitbox.tv) API.

Firstly, enter this line at the top of the document, replacing "hb" with whatever you like:

```javascript
	var hb = require("hitbox-api");
```

media - (callback) - Returns all the currently live users.

```javascript
	hb.media(function(err, res, data){
		console.log(data);
	});
```

mediaUser - (username, callback) - Returns detailed stream information about the given username.

```javascript
	hb.mediaUser("GamingTom", function(err, res, data){
		console.log(data);
	});
```

mediaFollowing - (username, callback) - Returns a list of all the currently live people the given username is following.

```javascript
	hb.mediaFollowing("GamingTom", function(err, res, data){
		console.log(data);
	});
```

user - (username, callback) - Returns general information about the given username.

```javascript
	hb.user("GamingTom", function(err, res, data){
		console.log(data);
	});
```

followers - (username, offset, limit, callback) - Returns a list of the people following the given username.

```javascript
	hb.followers("GamingTom", "0", "20", function(err, res, data){
		console.log(data);
	});
```

games - (callback) - Returns a list of all the currently played games, sorted by view count.

```javascript
	hb.games(function(err, res, data){
		console.log(data);
	});
```

teams - (callback) - Returns a list of all created teams. (May not work because of the huge amounts of results.)

```javascript
	hb.teams(function(err, res, data){
		console.log(data);
	});
```

team - (team, callback) - Returns detailed information about the given team.

```javascript
	hb.team("hitbox", function(err, res, data){
		console.log(data);
	});
```

##Example usage:
Here is an example to get a list of the people you are following who are live.

```
hb.mediaFollowing("GamingTom", function(err, res, data){
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
});
```

##Error codes:

* err01 - Username does not exist or is not yet activated.
* err02 - No followed streamers are currenty online.