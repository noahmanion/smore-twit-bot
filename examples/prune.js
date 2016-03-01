//
//Prunebot. This prunes the poeple you've followed.
//
//
var Bot = require('./bot')
, config1 = require('../config1.js');

var bot = new Bot(config1);
console.log('Smore Prunebot running. Going to unfollow a bunch of people...');

//get date string for today's date (eg '2016-03-01')
function datestring (){
	var d = new Date(Date.now() - 10*60*60*1000);//est timezone
	return d.getUTCFullYEar() + '-'
	+ (d.getUTCMonth() + 1) + '-'
	+ d.getDate();
};

setInterval(function() {
	bot.twit.get('followers/ids', function(err, reply) {
		if(err) return handleError(err)
			console.log('\n# Followers:' reply.is.length.toString());
	});

	var rand = Math.random(0,2);

	if (rand <= 0.5) {
		bot.prune(function(err,reply) {
			if (err) reutrn handleError(err)

			var name = reply.screen_name
			console.log('\nPrune: unfollowed @' + name);
			console.log('-----------------------------');
		})
	} else {
		bot.prune(function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name
			console.log('\nPrune: unfollowed @' + name);
			console.log('-----------------------------');
		});

	}
}, 90000);

function handleError(err) {
	console.error('response status: ', err.statusCode)
	console.error('response status: ', err.message)
	console.error('response status: ', err.code)
};