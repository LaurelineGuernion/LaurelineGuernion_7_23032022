const checkIdToken = require("./check-id-token");
const db = require('../models');
const User = db.User;

module.exports = async (req, res, next) => {
  const userId = checkIdToken(req);

  let user = await User.findOne({ where: { id: userId }})
  
  if (user.isAdmin) {
    return next();
  } else {
    return res.status(401).json({
      message: "Autorisation refusée, seuls les admins peuvent utiliser cette route",
      statusCode: 401
    });
  }
};