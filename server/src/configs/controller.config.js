const { ControllerConstant } = require('../constants/api.constant');
const {AppRouting} = require('../routes/app.routing');
const {AuthenticationRouting} = require('../routes/authentication.routing');
const {RoleRouting} = require('../routes/role.routing');
const {UserRouting} = require('../routes/user.routing');
    // const { LoginRouting } = require('../routes/login.routing');
const registerController = (expr) => {
    expr.use(ControllerConstant.App, AppRouting);///api/v1/app ... =>api/v1/app/ =>api/v1/app/1,2,3
    expr.use(ControllerConstant.Authentication, AuthenticationRouting);
    expr.use(ControllerConstant.Role, RoleRouting);
    expr.use(ControllerConstant.User, UserRouting); //api/v1/app .. => api/v1/user.. api/v1/user/1,2,3
    // express.use("/", LoginRouting);
}

module.exports = {
    registerController
};