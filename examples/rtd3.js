//
//
//
var Bot = require('./bot')
, config1 = require('../config1.js')

var bot = new Bot(config1)

console.log('rtd3 running...')

function datestring() {
	var d = new Date(Date.now() - 10*60*60*1000); //est
	return d.getUTCFullYear() + '-'
	+ (d.getUTCMonth() + 1 ) + '-'
	+ d.getDate();
};
function getRandomArbitary(min, max){
	return Math.random(max-min) + min;
};

setInterval(function () {
	bot.twit.get('followers/ids', function(err, reply) {
		if(err) return handleError(err);
		console.log('\n#Followers:' + reply.ids.length.toString());
	});
	var rand = Math.random();
	var influencers = ["mint", "thepennyhoarder", "krazycouponlady", "psfdeals", "wisebread", "brefrugal"];
	//console.log(rand);
	if ( rand <= .05 ) {
		var params = {
			q: "money saving tips"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.searchFollow(params, function(err, reply) {
			if(err) return handleError(err)

			var name = reply.screen_name;
			console.log("\nSearchFollow: followed @" + name);
		});
	} else if (rand <= .10) {
		var params = {
			q: "money saving tips"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.favorite(params, function(err, reply) {
			if(err) return handleError(err);

			console.log("\nFavoite: favorited reponse " + reply.id + ": " + reply.text);
		});

	} else if (rand <= .15) {
		var params = {
			screen_name: randIndex(influencers)
			, since: datestring()
			, result_type: "mixed"
		}
		console.log(params.screen_name)
		bot.retweet(params, function(err, reply) {
			if(err) return handleError(err);
			console.log("\nRetweet: retweeted a status by @" + params.screen_name + ": " + reply.text);
		});

	} else if (rand <= .20) {
		var params = {
			q: "lifehack"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.searchFollow(params, function(err, reply) {
			if(err) return handleError(err)

			var name = reply.screen_name
			console.log("\nSearchFollow: Followed@" + name + " who tweeted about " + params.q);
		});

	} else if (rand <= .25) {
		var params = {
			q: "lifehack"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.favorite(params, function(err, reply) {
			if(err) return handleError(err)

			console.log("\nFavorite: favotited response by @" + reply.screen_name + ": " + reply.text);
		});

	} else if (rand <= .30) {
		var params = {
			q:  "beermoney"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.searchFollow(params, function(err, reply) {
			if(err) return handleError(err)

			var name = reply.screen_name
			console.log("\nSearchFollow: Followed @" + name + "who tweeted about " + params.q)
		});

	} else if (rand <= .35) {
		var params = {
			q: "beermoney"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.favorite(params, function(err, reply) {
			if(err) return handleError(err)

			console.log("\nFavorite: favotited response by @" + reply.screen_name + ": " + reply.text);
		});

	} else if (rand <= .40) {
		var params = {
			q:  "spare change"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.searchFollow(params, function(err, reply) {
			if(err) return handleError(err)

			var name = reply.screen_name
			console.log("\nSearchFollow: Followed @" + name + "who tweeted about " + params.q)
		});

	} else if (rand <= .45) {
		var params = {
			q: "spare change"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.favorite(params, function(err, reply) {
			if(err) return handleError(err)

			console.log("\nFavorite: favotited response by @" + reply.screen_name + ": " + reply.text);
		});

	} else if (rand <= .50) {
		var params = {
			q:  "found money"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.searchFollow(params, function(err, reply) {
			if(err) return handleError(err)

			var name = reply.screen_name
			console.log("\nSearchFollow: Followed @" + name + "who tweeted about " + params.q)
		});

	} else if (rand <= .55) {
		var params = {
			q: "found money"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.favorite(params, function(err, reply) {
			if(err) return handleError(err)

			console.log("\nFavorite: favotited response by @" + reply.screen_name + ": " + reply.text);
		});

	} else if (rand <= .60) {
		var params = {
			q:  "extra money"
			, since: datestring()
			, result_type: "mixed"
		};
		bot.searchFollow(params, function(err, reply) {
			if(err) return handleError(err)

			var name = reply.screen_name
			console.log("\nSearchFollow: Followed @" + name + "who tweeted about " + params.q)
		});

	} else if (rand <= .95) {
		bot.prune(function (err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nPrune: unfollowed@ " + name);
		});

	} else {
		bot.prune(function (err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nPrune: unfollowed@ " + name);
		});

	}
}, getRandomArbitary(60000,120000));

function handleError(err) {
	console.error('response status:', err.statusCode);
	console.error('date:', err.message);
	console.error('code:', err.code);
};