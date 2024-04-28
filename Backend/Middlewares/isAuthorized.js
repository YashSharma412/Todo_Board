const isAuthorized = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized access. User session expired, please login again.",
      redirect: "/",
    });
  }
};

module.exports = isAuthorized;
