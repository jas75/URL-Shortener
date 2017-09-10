// $( document ).ready(function() {  
// 	$.ajax({
// 		url:'/latest-urls',
// 		type:'GET',
// 		dataType:'JSON',
// 		data:{}
// 	}).done(function(data){
// 		if(!data.success){
// 			var resultHTML=data.error;
// 			$('#latest').html(resultHTML);
// 			$('#latest').hide().fadeIn('slow');
// 		}
// 		else{
// 			var resultHTML='<div class="jumbotron"><p>'+data.urls+'</p></div>';
// 			$('#latest').html(resultHTML);
// 			$('#latest').hide().fadeIn('slow');
// 			console.log(data.urls.short_url)
// 		}
// 	});
// });

