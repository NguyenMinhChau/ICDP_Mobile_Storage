const Avatar = require('../Models/Avatar');

const avatarController = {
	getAvatar: async (req, res) => {
		try {
			const _avatar = await Avatar.findOne({ email: req.params.email });
			if (!_avatar)
				return res
					.status(400)
					.json({ message: 'Avatar does not exist.' });
			const { password: _, ...data } = _avatar._doc;
			res.status(200).json({
				message: 'Get avatar success!',
				user: data,
			});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},
	getAllAvatar: async (req, res) => {
		try {
			let { page, limit = 10 } = req.query;
			if (!page) {
				const avatars = await Avatar.find();
				const totalData = await Avatar.countDocuments();
				res.status(200).json({
					message: 'Get all avatars success!',
					avatars,
					total: totalData,
				});
			} else {
				if (page < 1) {
					page = 1;
				}
				const users = await Avatar.find()
					.skip((page - 1) * limit)
					.limit(limit);
				const totalData = await Avatar.countDocuments();
				res.status(200).json({
					message: 'Get all avatars success!',
					users,
					total: totalData,
				});
			}
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},
	updateAvatar: async (req, res) => {
		try {
			const avatarUpdate = await Avatar.findOneAndUpdate(
				{ email: req.params.email },
				{ $set: req.body },
				{ new: true },
			);
			res.status(200).json({
				message: 'Update avatar success!',
				avatarUpdate,
			});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},
	deleteAvatar: async (req, res) => {
		try {
			const user = await Avatar.findOneAndDelete({
				email: req.params.email,
			});
			res.status(200).json({
				message: 'Delete avatar success!',
				user,
			});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},
	createAvatar: async (req, res) => {
		try {
			const avatar = new Avatar(req.body);
			await avatar.save();
			res.status(201).json({
				message: 'Create avatar success!',
				avatar,
			});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},
};

module.exports = avatarController;
