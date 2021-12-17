const path = require('path');
const router = require('express').Router();
const feedbackRouter = require('./feedbackRouter');
const tipsRouter = require('./tipsRouter');

// GET Route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for feedback page
router.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/pages/feedback.html'))
);

router.use('/api/tips', tipsRouter);
router.use('/api/feedback', feedbackRouter);

module.exports = router;