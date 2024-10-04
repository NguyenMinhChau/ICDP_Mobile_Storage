const router = require('express').Router();
const userController = require('../Controllers/userController');

router.post('/create', userController.createUser);
router.get('/getall', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
