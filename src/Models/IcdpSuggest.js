const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const icdpSuggestModel = new Schema(
	{
		icdp_suggest: {
			type: Array,
			default: [],
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	},
);
module.exports = mongoose.model('icdpSuggest', icdpSuggestModel);
