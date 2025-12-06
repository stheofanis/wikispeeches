function reply_click(clicked_id) {
    $(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "xml/speeches.xml",
		dataType: "xml",
		success: function(xml){

			var random = Math.floor(Math.random() * 5);

			var sSpeech = $(xml).find('text').eq(random).text();
			var sSpeaker = $(xml).find('speaker').eq(random).text();
			$('#text').val(sSpeech);
			$('#speaker').val(sSpeaker);
		},
		error: function() {
		alert("An error occurred while processing XML file.");
            }
        });
    });
}