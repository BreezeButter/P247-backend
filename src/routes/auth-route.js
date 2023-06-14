const express = require('express');
const upload =require('../middlewares/upload')
const authController = require('../controllers/auth-controller');


router = express.Router();
const authenticateMiddleware = require('../middlewares/authenticate')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.put('/upload', upload.single('profileImage'), authenticateMiddleware,authController.uploadProfile);
router.patch('/edit', authenticateMiddleware,authController.editProfile);
router.get('/me', authenticateMiddleware, authController.getMe);



 
module.exports = router;
