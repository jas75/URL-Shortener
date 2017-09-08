$('.btn-shorten').on('click',function(){
	$.ajax({
		url:'/api/shorten',
		type:'POST',
		dataType:'JSON',
		data: {url: $('#url-field').val()},
		success: function(data){
			var resultHTML = '<a class="result" href="'+data.longUrl+'">'+data.shortUrl+'</a>';
			$('#link').html(resultHTML);
			$('#link').hide().fadeIn('slow');
		}
		error: function(data){
			var resultHTML=data.error;
			$('#link').html(resultHTML);
			$('#link').hide().fadeIn('slow');
		}
	});
});
