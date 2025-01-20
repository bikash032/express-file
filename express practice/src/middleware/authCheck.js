const authCheck = (req, res, next) => {
  let success = false;
  if (success) {
    next();
  } else {
    next({ code: 401, msg: "user not logged in....." });
  }
};
console.log("this is from of the authcheck");

module.exports = authCheck;
