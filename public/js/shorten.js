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
			var tableDisplay='<td><a>'+data.longUrl+'</a></td><td><a>'+data.shortUrl+'</a></td><td>'+data.createdAt+'</td>';
			$('#link').html(resultHTML);
			$('#link').hide().fadeIn('slow');
			$('#direct').html(tableDisplay);
		}
	});
});
