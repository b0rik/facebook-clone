const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/user', async (req, res) => {
  if (req.user) {
    const userData = await userController.getUserInfo(req.user.id);

    if(!userData) {
      res.json(null);
    } else {
      res.json(userData);
    }
  } else {
    res.json(null);
  }

});

module.exports = router;