var client = new Twitter({
  consumer_key: process.env.twitterKeys,
  consumer_secret: process.env.twitterKeys,
  access_token_key: process.env.twitterKeys,
  access_token_secret: process.env.twitterKeys
});


var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'I Want it That Way' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    
});

var request = require('request');
request('http://www.omdbapi.com/?', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});