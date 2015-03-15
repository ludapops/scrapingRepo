// console.log('Hello, world!');
// phantom.exit();

// var page = require('webpage').create();
// page.open("http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/25005", function(status) {
//   console.log("Status: " + status);
//   if(status === "success") {
//     page.render('schoolTest.png');
//   }
//   phantom.exit();
// });

var page = require('webpage').create();
page.open("http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/25005", function() {
  console.log('GETTING TO HERE 1');
  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
    page.evaluate(function() {
    	console.log('GETTING TO HERE 2');
      // $("button").click();
      if ($('#open_show_more_item').length) {
      	$('#open_show_more_item').click();
      	console.log('GETTING TO HERE 3');
      }
    });
    phantom.exit()
  });
});