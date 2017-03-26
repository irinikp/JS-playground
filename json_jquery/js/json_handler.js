(function() {
	$.getJSON( "data/generated.json", function( json ) {
		var output = '';
		var rdata = json.rdata;
		var length = json.rdata.length
		for( var i=0; i<length; i++ ) {
			output += "<li><h4>"+rdata[i].name+"</h4>";
			output += "<p>"+rdata[i].address+"</p></li>";
		}
		$("#jlist").append(output);
	});
})();
