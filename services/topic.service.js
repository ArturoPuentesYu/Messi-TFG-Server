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
      .sort({ createdAt: -1 });
  }

  async getTopicById(id) {
    const topic = await Topic.findById(id)
      .populate('createdBy', 'name surnames')
      .populate('comments.createdBy', 'name surnames')
      .exec();

    if (topic && topic.comments) {
      topic.comments.sort((a, b) => b.createdAt - a.createdAt);
    }

    return topic;
  }

  async getTopicsPagination(page, limit) {
    const skip = (page - 1) * limit;
    const total = await Topic.countDocuments();
    const topics = await Topic.find()
      .populate('createdBy', 'name surnames')
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
