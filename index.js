const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
const bodyParser=require('body-parser');
const config = require('./config');
const hash=require('./hash');

//Url model
const Url= require('./models/url');

mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'views/index.html'));
});

app.post('/api/shorten',(req,res)=>{
	if(!req.body.url){
		res.json({success:false,error:'URL was not provided'});
	}
	else{
		var longUrl=hash.checkFormat(req.body.url);	// check if url format begins with http or www
		Url.findOne({long_url:longUrl},(err,url)=>{
			if (err) {
				res.json({success:false,error:err});
			}
			else{
				// If URL already exists
				if(url){
					res.json({success:true,longUrl:url.long_url,shortUrl:url.short_url});
				}
				else{
					const shortUrl=config.webhost+hash.makeId();//Generate a random id
					const newUrl=new Url({
						long_url:longUrl,
						short_url:shortUrl,
						created_at: Date.now()
					});

					newUrl.save((err)=>{
						if(err){
							res.json({success:false,error:'Something went wrong: '+err});
						}
						else{
							res.json({success:true,shortUrl: newUrl.short_url, longUrl:newUrl.long_url});
						}
					});
				}
			}
			
		});
	}
});

app.get('/:encoded_id',(req,res)=>{

	if(!req.params.encoded_id){
		res.json({error:'URL was not provided'});
	}
	else{
		Url.findOne({short_url:config.webhost+req.params.encoded_id},(err,url)=>{ // Look for url_short in database
			if(err){
				res.json({error:'Something went wrong: '+ err});
			}
			else{
				// If found redirect to long_url
				if(url){
					res.redirect(url.long_url);
				}
				else{			
					res.redirect(config.webhost);
				}
			}
		});
	}
});

app.listen(8080,()=>{
	console.log('Listening on port 8080');
});