var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

function getRepoContributors(repoOwner, repoName, cb) {
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
  request(url, function(err, res, body) {
    cb(err, body);
  });
}

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request'
    }
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}