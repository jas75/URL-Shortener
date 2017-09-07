const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CounterSchema= Schema({
	_id: {type: String, required: true},
	seq: {type: Number, default: 0};
});

var counter = mongoose.model('counter',CounterSchema);

const urlSchema = new Schema({
	_id: {type: Number, index: true},
	long_url: String,
	created_at: Date
});