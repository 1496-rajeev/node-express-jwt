const userLogin = (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);
  res.status(200).json(randomNumber);
};

module.exports = { userLogin };
