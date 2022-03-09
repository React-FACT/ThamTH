const {BaseService} = require('./base/base.service');
const {UserRepository} = require('../repositories/user.service');
const logger = require('../logger/winston.logger');
class UserService extends BaseService {
    _userRepos;
    constructor(){
        let userRepos= new UserRepository();
        super(userRepos);  
        this._userRepos = userRepos;     
        logger.info(`==================== constructor ${this.constructor.name}====================`); 
    }
}
module.exports = { UserService }