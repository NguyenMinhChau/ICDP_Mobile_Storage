const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filterTicketModel = new Schema(
	{
		area_filter: {
			type: Array,
			default: [],
		},
		kvbtht_filter: {
			type: Array,
			default: [],
		},
		province_filter: {
			type: Array,
			default: [],
		},
		queue_filter: {
			type: Array,
			default: [],
		},
		status: {
			type: String,
			default: '',
		},
		type: {
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
module.exports = mongoose.model('filterTicket', filterTicketModel);
