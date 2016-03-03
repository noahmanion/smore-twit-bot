//
//
//twit bot based on RTD2
//
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
	return Math.random(max - min) + min;

};

setInterval(function() {
	bot.twit.get('followers/ids', function(err, reply) {
		if(err) return handleError(err);
		console.log('\n# Followers:' +reply.ids.length.toString());
	});
	var rand = Math.random();
	//console.log(rand);
	if( rand <=.1 ){//Follow a follower of @thepennyhoarder
		var params = {
			screen_name: "thepennyhoarder"
		};
		bot.mingleUser(params, function(err,reply) {
			if(err) return handleError(err)
			var name = reply.screen_name;
      		console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
		})

	} else if (rand <= .2 ) {//Follow a follower of @krazycouponlady
		var params = {
			screen_name: "krazycouponlady"
		};
		bot.mingleUser(params, function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
      		console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
		});

	} else if (rand <= .3 ) {//Follow a follower of @mint
		var params = {
			screen_name: "mint"
		};
		bot.mingleUser(params, function(err, reply ) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name  + ", follower of @" + params.screen_name);
		});
	} else if (rand <= .4 ) {//Follow a follower of @psfdeals
		var params = {
			screen_name: "psfdeals"
		};
		bot.mingleUser(params, function(err, reply ) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name + ", follower of @" + params.screen_name);
		});
	} else if (rand <= .5 ) {//Follow a follower of @wisebread
		var params = {
			screen_name: "wisebread"
		};
		bot.mingleUser(params, function(err, reply ) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name  + ", follower of @" + params.screen_name);
		});
	} else if (rand <= .6 ) {//Follow a follower of @befrugal
		var params = {
			screen_name: "befrugal"
		};
		bot.mingleUser(params, function(err, reply ) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name  +", follower of @" + params.screen_name);
		});
	} else {//Prune
		bot.prune(function (err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name
			console.log('\nPrune: unfollowed @' + name);
		});

	}
}, getRandomArbitrary(120000,180000));

function handleError(err) {
	console.error('response status:', err.statsuCode);
	console.error('data:', err.message);
	console.error('code:', err.code);
}
