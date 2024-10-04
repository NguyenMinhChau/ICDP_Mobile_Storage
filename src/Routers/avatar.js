const router = require('express').Router();
const avatarController = require('../Controllers/avatarController');

router.post('/create', avatarController.createAvatar);
router.get('/get-all', avatarController.getAllAvatar);
router.get('/:email', avatarController.getAvatar);
router.put('/:email', avatarController.updateAvatar);
router.delete('/:email', avatarController.deleteAvatar);

module.exports = router;
