const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const displayAppModel = new Schema(
	{
		label: {
			type: String,
			default: 'Sáng',
		},
		value: {
			type: String,
			default: 'light',
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
module.exports = mongoose.model('DisplayApp', displayAppModel);
