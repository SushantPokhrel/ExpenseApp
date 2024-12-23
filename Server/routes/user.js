const {Router} = require('express');
const {handleLogin, handleSignup , getUser} = require('../controllers/user')
const router = Router();
const auth = require('../middlewares/auth');

router.get('/', (req, res) => {
    res.send("Login Route");})
    // Add POST methods for login, signup here
    .post('/login', handleLogin)
    .post('/signup', handleSignup)
    .get('/me',auth,getUser);

module.exports = router;