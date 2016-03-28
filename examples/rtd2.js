//
//  RTD2 - Twitter bot that tweets about the most popular github.com news
//  Also makes new friends and prunes its followings.
//
var Bot = require('./bot')
  , config1 = require('../config1');

var bot = new Bot(config1);

console.log('RTD2: Running.');

//get date string for today's date (e.g. '2011-01-01')
function datestring () {
  var d = new Date(Date.now() - 5*60*60*1000);  //est timezone
  return d.getUTCFullYear()   + '-'
     +  (d.getUTCMonth() + 1) + '-'
     +   d.getDate();
};

setInterval(function() {
  bot.twit.get('followers/ids', function(err, reply) {
    if(err) return handleError(err)
    console.log('\n# followers:' + reply.ids.length.toString());
  });
  var rand = Math.random();

  if(rand <= 0.1) {//follow someone who tweets about saving money
    var params = {
      q: "saving money"
      , since: datestring()
      , result_type: "mixed"
    };
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err)

        var name = reply.screen_name;
      console.log("\nSearch Follow: followed @" + reply.name + " who tweeted about " + params.q);
    });
  } else if (rand <= .2) {//favroite a tweet about saving money
    var params = {
      q: "saving money"
      , since: datestring()
      , result_type: "mixed"
    }
    bot.favorite(params, function(err, reply) {
      if (err) return handleError(err)

      console.log("\nFavorite: favorited response: " + reply.id + "'" + reply.text + "'");
    });

  } else if (rand <= .3) {//follow someone who tweets about lifehacks
    var params = {
      q: "lifehack"
      , since: datestring()
      , result_type: "mixed"
    };
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err)

      console.log("\nSearchFollow: followed @" + reply.name + " who tweeted about " + params.q)
    });
  } else if (rand <= .4 ) {//favorite a tweet about lifehacks
    var params = {
      q: "lifehack"
      , since: datestring()
      , result_type: "mixed"
    };
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err)

      console.log("\nFavorite: favorited response: " + reply.id + "'" + reply.text + "'")
    });
  } else if (rand <= .5) {//follow somoene who tweets about cheap healthy meals
    var params = {
      q: "cheap healthy meals"
      , since: datestring()
      , result_type: "mixed"
    };
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err)

      console.log("\nSearchFollow: followed @" + reply.name + " who tweeted about " + params.q)
    });
  } else if (rand <= .6 ) {//favorite a tweet about cheap healthy meals
    var params = {
      q: "cheap healthy meals"
      , since: datestring()
      , result_type: "mixed"
    };
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err)

      console.log("\nFavorite: favorited response: " + reply.id + "'" + reply.text + "'")
    });
  } else if (rand <= .7 ) {//favorite a tweet about cartwheel deals
    var params = {
      q: "cartwheel deals"
      , since: datestring()
      , result_type: "mixed"
    };
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err)

      console.log("\nFavorite: favorited response: " + reply.id + "'" + reply.text + "'")
    });
  } else {                  //  prune a friend
    bot.prune(function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name
      console.log('\nPrune: unfollowed @'+ name);
    });
  }
}, 70000);

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.message);
  console.error('code:', err.code);
}
