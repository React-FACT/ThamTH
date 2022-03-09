const BasePathConstant = '/api/v1';
const ControllerConstant = {
    App: `${BasePathConstant}/app`,
    Authentication:`${BasePathConstant}/auth`,
    Role:`${BasePathConstant}/role`,
    User: `${BasePathConstant}/user`,
    Login: `${BasePathConstant}/Login`,
}

const CommonMethodConstant = {
    GetAll: '/get-all',
    GetById: '/:id',
    Create: '/',
    Update: '/:id',
    Delete: '/:id',
}

module.exports = {
    CommonMethodConstant,
    ControllerConstant
};