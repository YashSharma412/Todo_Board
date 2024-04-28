const notAlreadyLoggedIn = (req, res, next) => {
  if (!req.session || !req.session.isAuth) {
    next();
  } else {
    return res.status(403).json({
      status: 403,
      message: "User is already logged in. Forbidden 403",
    });
  }
};

module.exports = notAlreadyLoggedIn;
