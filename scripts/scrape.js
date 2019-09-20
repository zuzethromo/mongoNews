let request = require("request");
let cheerio = require("cheerio");

let scrape = function (cb) {
    request("http://www.nytimes.com", function(err, res, body) {
        let $ = cheerio.load(body);
        let articles = [];

        $(".theme-summary").each(function(i, element) {
            let head = $(this).children(".story-heading").text().trim();
            let sum = $(this).children(".summary").text().trim();

            if (head && sum) {
                let headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                let sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                let dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat
                };

                articles.push(dataToAdd);

            }
        });
        cb(articles);
    });
};

module.exports = scrape;