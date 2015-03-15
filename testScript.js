// model this script on this http://blog.miguelgrinberg.com/post/easy-web-scraping-with-nodejs
var request = require('request');
var cheerio = require('cheerio');
var events = require('events');
var EventEmitter = require("events").EventEmitter;

var schools =['http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/25005','http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/25009','http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/25017','http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/25021','http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/25023','http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/25025','http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/25025'];



function urlSplitter(url) {
	var seperatedUrl = url.split('/');
	var schoolId = seperatedUrl[seperatedUrl.length -1];
	return schoolId;
};

var schoolUrlsSnippets = schools.map(function(fullUrl) {
	return urlSplitter(fullUrl);
});


for (snippet in schoolUrlsSnippets) {
	var url = 'http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/' + schoolUrlsSnippets[snippet];
	request(url, (function(snippet) {
		return function(err, resp, body) {
			if(err)
				throw err;
			$ = cheerio.load(body);
			// if ($('#open_show_more_item').length) {
			// 	var $()
			// 	$('#open_show_more_item').on('click', function(){
			// 		console.log("EVENTLISTNER FIRED")
			// 		$ = cheerio.load(body);
			// 		$('[class^="table_cell_"]').each(function() {
			// 			console.log( $(this).text() +"\t");
			// 		});
			// 	});
			// 	$('#open_show_more_item').emit('click');
			// 	// var simulatedClick = new EventEmitter();
			// 	// $('#open_show_more_item').addEventListener('click', function() {
			// 	// $('#open_show_more_item').dispatchEvent(simulatedClick);
			// 	// });

			// }
			$('[class^="table_cell_"]').each(function() {
				console.log( $(this).text() +"\t");
			});
		}
	})(snippet));
}
			// $('.school-type-list-text').each(function() {
			// 	console.log( $(this).text().trim() );
			// });
			// var arrayOfColumnObjs = $('[class^="table_cell_"]').toArray();
			// var arrayOfColumnText = arrayOfColumnObjs.map(function(obj) {
			// 	obj.text();
			// });
			// console.log(arrayOfColumnText);
			// $('[class^="table_cell_"]').each(function() {
			// 	console.log( $(this).text() +"\t");
			// });
