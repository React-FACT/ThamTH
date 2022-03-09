const {AuthenticationService} = require('../services/authentication.service');
const authenticationService = new AuthenticationService();

const authGetAll = (async (req, res) => {    
    res.json(await authenticationService.getAll());
});

const authGetById = (async(req, res) => {
    res.json(await authenticationService.getById(req.params.id));
});

module.exports = {
    authGetAll,
    authGetById
}