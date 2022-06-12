const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(400).json({ msg: 'No token' });
    }
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRETE);
      const { id, username } = decoded;
      req.user = { id, username };
      next();
    } catch (error) {
      res.status(401).json({ msg: 'Invalid token' });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = authMiddleware;
