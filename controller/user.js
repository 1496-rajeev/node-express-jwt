require('dotenv').config();
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ msg: 'Username and Password required' });
    }
    //db mongo
    //payload easy
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRETE, {
      expiresIn: '30d',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const dashBoard = async (req, res) => {
  res.status(200).json(req.user.username);
};

module.exports = { userLogin, dashBoard };
