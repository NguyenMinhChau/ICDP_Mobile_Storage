const userRouter = require('./user');

const router = (app) => {
	app.use('/api/v1/users', userRouter);
};

module.exports = router;
