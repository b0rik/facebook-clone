const router = require('express').Router();

router.get('/login', (req, res) => res.json({ ok: true }));
router.get('/badLogin', (req, res) => res.json({ ok: false }));
router.get('/user', (req, res) => res.send(req.user));

module.exports = router;