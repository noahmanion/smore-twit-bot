//
//
//
var Bot = require('./bot')
, config1 = require('../config1.js')

var bot = new Bot(config1)

console.log('random retweet. will retweet a status from a group of influencers by picking randomly')

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
	if ( rand <= .99 ) {
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