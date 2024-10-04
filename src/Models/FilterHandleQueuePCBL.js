const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filterHandleQueuePCBLModel = new Schema(
	{
		storm_id_single: {
			type: String,
			default: '',
		},
		branch_single: {
			type: String,
			default: '',
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
module.exports = mongoose.model(
	'FilterHandleQueuePCBL',
	filterHandleQueuePCBLModel,
);
