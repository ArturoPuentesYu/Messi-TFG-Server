const topicService = require('../services/topic.service');

class TopicController {
  async createTopic(req, res) {
    try {
      const topic = await topicService.createTopic(req.body);
      res.status(201).json(topic);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTopics(req, res) {
    try {
      const topics = await topicService.getTopics();
      res.status(200).json(topics);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTopicById(req, res) {
    try {
      const { id_topic } = req.params;
      const topic = await topicService.getTopicById(id_topic);
      res.status(200).json(topic);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTopicsPagination(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;

      if (page <= 0 || limit <= 0) {
        res
          .status(400)
          .json({ message: 'Page and limit must be positive numbers.' });
        return;
      }

      const topics = await topicService.getTopicsPagination(page, limit);
      res.status(200).json(topics);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async addComment(req, res) {
    try {
      const { topicId } = req.params;
      const comment = await topicService.addComment(topicId, req.body);
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new TopicController();
