const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const permissionAppModel = new Schema(
	{
		data: {
			type: Object,
			default: {},
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
module.exports = mongoose.model('permissionApp', permissionAppModel);
