$('.btn-shorten').on('click',function(){
	$.ajax({
		url:'/api/shorten',
		type:'POST',
		dataType:'JSON',
		data: {url: $('#url-field').val()},
	}).done(function(data){
		if(!data.success){
			var resultHTML=data.error;
			$('#link').html(resultHTML);
			$('#link').hide().fadeIn('slow');
		}
		else{
			var resultHTML='<a class="result" target="_blank" href="'+data.longUrl+'">'+data.shortUrl+'</a>';
			$('#link').html(resultHTML);
			$('#link').hide().fadeIn('slow');
		}
	});
});
