// ********this page may need help******

var request = require('request');
var cheerio = require("cheerio");

// A function to scrape the hometalk site that can be exported
var scrape = function(cb) {
    request.get("http://www.hometalk.com/", function(err, res, body){
        var $ = cheerio.load(body);
        
        // Empty array for holding articles after the request call
        var articles = [];
         // Now, we grab every a within an article tag, and do the following: (****stopped at 11:33)
    $(".block-body").each(function(i, element) {

        var head = $(element).find("a").text().trim();
        var sum = $(element).find("b:nth-of-type(1)").text().trim();
        // var link = $(".media-wrap").children("a").attr("href");
        if (head && sum) {
            var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm," ").trim();
            var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm," ").trim();

            var dataToAdd = {
                headline: headNeat,
                summary: sumNeat,
            };
            articles.push(dataToAdd);
        }
        // var header = $(this).children("story-heading")
    //     // Save an empty result object
    //     var result = {};
  
    });
    cb(articles);
});

};

module.exports = scrape;
