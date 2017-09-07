const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'views/index.html'));
});

app.post('/api/shorten',(req,res)=>{

});

app.get('/:encoded_id',(req,res)=>{

});

app.listen(8080,()=>{
	console.log('Listening on port 8080');
});