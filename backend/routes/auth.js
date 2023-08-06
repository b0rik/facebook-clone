const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/login', (req, res) => res.json({ ok: true }));
router.get('/logout', (req, res) => res.json({ ok: true }));
router.get('/badLogin', (req, res) => res.json({ ok: false }));
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