const passportJWT = require('passport-jwt');
// ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;
// JwtStrategy which is the strategy for the authentication
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'wowwow';


// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
   let user = { "id": jwt_payload.id ,"name":"admin"}
    if (user) {
      next(null, user); //push user object to req (req.user)
    } else {
      next(null, false);
    }
  });
  // use the strategy
module.exports={strategy}