
function checkFormat(url){

	var validUrl='';
	if(url.startsWith("http://") || url.startsWith("www.") || url.startsWith('https://')){
		validUrl=url;
	}
	else{
		validUrl = 'http://'+url;
	}
	
	return validUrl;
}

function makeId() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 8; i++)
	text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}


module.exports.checkFormat=checkFormat;
module.exports.makeId = makeId;
