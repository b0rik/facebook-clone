const router = require('express').Router();

const User = require('../models/User');

router.get('/login', (req, res) => res.json({ ok: true }));
router.get('/logout', (req, res) => res.json({ ok: true }));
router.get('/badLogin', (req, res) => res.json({ ok: false }));
router.get('/user', async (req, res) => {
  if (req.user) {
    res.json({ id: req.user.id })
  } else {
    res.json(null);
  }

});

module.exports = router;