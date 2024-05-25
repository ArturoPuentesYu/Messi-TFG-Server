const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topic.controller');

router.post('/topic', topicController.createTopic);
router.get('/topic', topicController.getTopics);
router.get('/topic/pagination', topicController.getTopicsPagination);

router.post('/topic/:topicId/comments', topicController.addComment);

module.exports = router;