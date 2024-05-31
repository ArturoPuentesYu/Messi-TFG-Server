const User = require('../models/user.model');

const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user || !user.isAdmin) {
      return res.status(403).send({ error: 'Access denied. Admins only.' });
    }
    next();
  } catch (err) {
    res.status(500).send({ error: 'Server error' });
  }
};

module.exports = adminMiddleware;
