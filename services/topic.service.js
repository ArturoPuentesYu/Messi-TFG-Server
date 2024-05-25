const Topic = require('../models/topic.model');

class TopicService {
  async createTopic(topicData) {
    console.log(topicData);
    const topic = new Topic(topicData);
    return await topic.save();
  }

  async getTopics() {
    return await Topic.find()
      .populate('createdBy', 'name surnames')
      .populate('comments.createdBy', 'name surnames')
      .sort({ createdAt: -1 });
  }

  async getTopicsPagination(page, limit) {
    const skip = (page - 1) * limit;
    const total = await Topic.find().count();
    const topics = await Topic.find()
      .populate('createdBy', 'name surnames')
      .populate('comments.createdBy', 'name surnames')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return { topics: topics, total: total };
  }

  async addComment(topicId, commentData) {
    const topic = await Topic.findById(topicId);
    if (!topic) {
      throw new Error('Tema no encontrado');
    }
    topic.comments.push(commentData);
    return await topic.save();
  }
}

module.exports = new TopicService();
