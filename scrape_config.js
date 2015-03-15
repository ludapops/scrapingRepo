// function exit(code) {
//     if (page) page.close();
//     setTimeout(function(){ phantom.exit(code); }, 0);
//     phantom.onError = function(){};
//     throw new Error('');
// }

function exit(code) {
    if (page) page.close();
    setTimeout(function(){ phantom.exit(code); }, 0);
    phantom.onError = function(){};
    throw new Error('');
}

exit()
pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'csv',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'file',
    outFile: 'test.csv'
});

pjs.addSuite({
	url: "http://www.privateschoolreview.com/county_private_schools/stateid/MA/county/25005",
	scrapper: function(){
		return $('[class^="table_cell_"]').text();
	},
});

