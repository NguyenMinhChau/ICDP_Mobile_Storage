const avatarRouter = require('./avatar');

const router = (app) => {
	app.use('/api/v1/avatar', avatarRouter);
};

module.exports = router;
