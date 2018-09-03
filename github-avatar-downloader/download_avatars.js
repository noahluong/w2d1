var request = require('request');
var request2 = require('./secrets.js')

console.log('Welcome to the GitHub Avatar Downloader!');


function downloadImageByURL(url, filePath) {
  var request = require('request');
  var fs = require('fs');

  request.get(url)               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream(filePath));               // Note 4

}
// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "kvirani.jpg")


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      "Authorization" : "token ff3e44af05036daf8e93a30db4c41df4e54cfff4"
    }
  };

  request(options, function(err, res, body) {
    cb(err, JSON.parse(body));
  });
}


var owner = process.argv[2];
var repo = process.argv[3];


function callback(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);

  result.forEach(function(user) {
    downloadImageByURL(user.avatar_url, `${user.login}.jpg`);
  })
}


getRepoContributors(owner, repo, callback);

// function requestURL(owner, repo) {
// var options2 = {
//     url: "https://api.github.com/repos/" + owner + "/" + repo + "/contributors"
// }
// }


