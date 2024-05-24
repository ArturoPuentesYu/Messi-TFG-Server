
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
