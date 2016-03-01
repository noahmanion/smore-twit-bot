//
//twit bot based on RTD2
//
//
var Bot = require('./bot')
, config1 = require('../config1');

var bot = new Bot(config1);

console.log('smore-twit-bot is Running. Grey.js')

//get date string for today's date
function datestring() {
	var d = new Date(Date.now() - 10*60*60*1000); //est
	return d.getUTCFullYear() + '-'
	+ (d.getUTCMonth() + 1) + '-'
	+ d.getDate();
};
function getRandomArbitrary(min, max) {
	return math.random(max - min) + min;
};

setInterval(function() {
	bot.twit.get('followers/ids', function(err, reply) {
		if(err) return handError(err);
		console.log('\n# Followers:' +reply.ids.length.toString());
	});
	var rand = Math.random();
	if( rand <=.1 ){//Follow a follower of 

	} else if (rand <= .2 ) {//Follow a follower of 
		var params = {
			screen_name: ''
		};
		bot.migleUser(params, function(err, reply ) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name ", follower of @" + screen_name);
		});

	} else if (rand <= .3 ) {//Follow a follower of 
		var params = {
			screen_name: ''
		};
		bot.migleUser(params, function(err, reply ) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name ", follower of @" + screen_name);
		});
	} else if (rand <= .4 ) {//Follow a follower of 
		var params = {
			screen_name: ''
		};
		bot.migleUser(params, function(err, reply ) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name ", follower of @" + screen_name);
		});
	} else if (rand <= .5 ) {//Follow a follower of 
		var params = {
			screen_name: ''
		};
		bot.migleUser(params, function(err, reply ) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name ", follower of @" + screen_name);
		});
	} else if (rand <= .6 ) {//Follow a follower of 
		var params = {
			screen_name: ''
		};
		bot.migleUser(params, function(err, reply ) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name ", follower of @" + screen_name);
		});
	} else {//Prune
		bot.prune(function (err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name
			console.log('\nPrune: unfollowed @' + name);
		});

	}
}, getRandomArbitrary(120000,180000));