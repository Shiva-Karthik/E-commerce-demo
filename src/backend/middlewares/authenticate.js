// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// const verifyToken = (token) => {
//   return new Promise((resolve, reject) => {
//     jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
//       if (err) return reject(err);

//       resolve(user);
//     });
//   });
// };

// module.exports = async (req, res, next) => {
//   // check if authorization header has been set
//   // if not throw an errors
//   if (!req.headers.authorization)
//     return res.status(400).send({
//       message: "authorization token was not provided or was not valid",
//     });

//   // if bearer token is in authorization header
//   // if not throw an error
//   if (!req.headers.authorization.startsWith("Bearer "))
//     return res.status(400).send({
//       message: "authorization token was not provided or was not valid",
//     });

//   // split the bearer token and get the [1] which is the token
//   const token = req.headers.authorization.split(" ")[1];

//   // then we will call jwt to verify the token
//   let user;
//   // if token is invalid then we will throw an error
//   try {
//     user = await verifyToken(token);
//   } catch (err) {
//     return res.status(400).send({
//       message: "authorization token was not provided or was not valid",
//     });
//   }

//   // if token is valid then we will put the user retrieved from the token in the req object
//   req.user = user.user;

//   // return next()
//   return next();
// };


require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return reject(err);
      resolve(user);
    });
  });
};
const authenticate = async (req, res, next) => {
  const cookieHeader = req.headers?.cookie;
  if (!cookieHeader) return res.status(200).redirect('/register/login');
  let token = cookieHeader.split("=")[1];
  // console.log(cookieHeader, "cookieheader")
  let user;
  try {
    user = await verifyToken(token);
    // console.log(user);
  } catch (error) {
    return res.status(500).send({ message: "Authorization token invalid" });
  }
  //   console.log(user)
  req.user = user.user;
  //   console.log(req.user);

  //   console.log('user:', req.user);
  return next();
};

module.exports = { authenticate, verifyToken };