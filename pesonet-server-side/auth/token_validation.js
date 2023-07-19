const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");

    if (token) {
      token = token.slice(7);
      verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
        if (error) {
          res.send({
            success: 0,
            message: "Something went wrong",
            error: error,
          });
        } else {
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access denied! Unauthorized user",
      });
    }
  },
};
