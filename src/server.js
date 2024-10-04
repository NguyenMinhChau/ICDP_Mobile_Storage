require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const router = require('./Routers');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const app = express();

const connect = async () => {
	try {
		const urlDb =
			process.env.TYPE === 'DEV'
				? process.env.MONGO_URI_COMPASS
				: process.env.MONGO_URI_CLOUD;
		await mongoose.connect(urlDb, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB Connected Successfully`);
	} catch (err) {
		console.log(`MongoDB Connection Failed`);
	}
};

connect();

app.use(cookieParser());
app.use(express.json());
app.use(
	cors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		allowedHeaders:
			'Origin,X-Requested-With,Content-Type,Accept,Authorization,Accept-Language',
	}),
);
app.use(
	express.urlencoded({
		extended: true,
	}),
);
app.use(express.static(path.join(__dirname, '/uploads/')));
//app.use(morgan('common'));
router(app);

app.listen(port, () => {
	console.log(`Server running port ${port}`);
});
