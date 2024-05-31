const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topic.controller');
const authMiddleware = require('../config/authMiddleware');

router.get('/topic', topicController.getTopics);
router.post('/topic', authMiddleware, topicController.createTopic);
router.get('/topic/:id_topic', topicController.getTopicById);
router.get('/pagination', topicController.getTopicsPagination);
router.post(
  '/topic/:topicId/comments',
  authMiddleware,
  topicController.addComment
);

module.exports = router;
