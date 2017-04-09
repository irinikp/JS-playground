(function() {
$.getJSON( "data/timeline.json", function( json ) {
		/*update timeline*/
		var output = '';
		var rdata = json.experience;
		var length = json.experience.length
		for( var i=0; i<length; i++ ) {
			if( rdata[i].inverted ) {
				output += "<li class='timeline-inverted'";
			} else {
				output += "<li class='timeline'";
			}
			if( rdata[i].menu ) {
				output += " id='"+rdata[i].menu+"'";
			}
			output += ">";
			output += "<div class='timeline-badge "+rdata[i].badge+"'><i class='glyphicon "+rdata[i].glyphicon+"'></i></div>";
			output += "<div class='timeline-panel'>";
			output += "<div class='timeline-heading'>";
			output += "<h4 class='timeline-title'>"+rdata[i].title+"</h4>";
			output += "<p><small class='text-muted'>"+rdata[i].time+"</small></p></div>";
			if( rdata[i].body ) {
				output += "<div class='timeline-body'>"+rdata[i].body+"</div>";
			}
			output += "</div></li>";
		}
		$(".timeline").append(output);

		/*update skills*/
		skills_array = json.skills;
		skills_length = json.skills.length;
		for( var j=0; j<skills_length; ++j) {
			skills_items_array = skills_array[j].items;
			columns = skills_array[j].columns;
			output = '';
			output += "<div class='modal-dialog' role='document'>";
			output += "<div class='modal-content'>";
			output += "<div class='modal-header'>";
			output += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
			output += "<h4 class='modal-title' id='myModalLabel'>"+skills_array[j].category+"</h4>";
			output += "</div>";
			output += "<div class='modal-body'><div class='row'><div class='col-sm-"+columns+"'>";

			skills_items_length = skills_items_array.length;
			for( var k=0; k<skills_items_length; ++k) {
				if( skills_items_array[k].subcategory ) {
					output += "<h4>"+skills_items_array[k].subcategory+"</h4>";
				}
				skills_subitems_array = skills_items_array[k].subitems;
				skills_subitems_length = skills_subitems_array.length;
				for( var i=0; i<skills_subitems_length; ++i) {
					output += "<div class='progress'>";
					output += "<div class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: "+skills_subitems_array[i].percentage+"%;'></div>";
					output += "<span class='progress-type'>"+skills_subitems_array[i].text+"</span></div>";
				}
				if( skills_items_array[k].columnbreak ) {
					output += "</div><div class='col-sm-"+columns+"'>";
				}
			}
			output += "</div></div></div>";
			output += "<div class='modal-footer'>";
			output += "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
			output += "</div></div></div>";
			$("#"+skills_array[j].modal_id).append(output);
		}
	});
})();