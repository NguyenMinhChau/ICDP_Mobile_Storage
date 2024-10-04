const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationTopicModel = new Schema(
	{
		topic: {
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
module.exports = mongoose.model('notificationTopic', notificationTopicModel);
