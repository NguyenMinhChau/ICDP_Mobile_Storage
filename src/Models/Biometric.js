const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const biometricModel = new Schema(
	{
		state: {
			type: Boolean,
			default: false,
		},
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
module.exports = mongoose.model('Biometric', biometricModel);
