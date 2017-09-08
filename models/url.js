const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
const Schema=mongoose.Schema;

const urlSchema = new Schema({
	long_url: String,
	short_url: String,
	created_at: Date
});

module.exports = mongoose.model('Url',urlSchema);