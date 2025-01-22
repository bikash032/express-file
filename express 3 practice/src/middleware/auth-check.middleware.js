const authCheck = (req, res, next) => {
  let success = true;
  if (success) {
    next();
  } else {
    res.json({
      status: 200,
      msg: "user is not logged in .........",
      data: data,
    });
  }
};
module.exports=authCheck