// const { UserService } = require('../services/user.service');
// const _userService = new UserService();
const logger = require('../logger/winston.logger');
const db = require('../configs/db.config')
const getAll = ((req, res) => {
    let sql = 'SELECT * FROM user'
    db.query(sql, (err, response) => {
        if (err) throw err
        res.json(response)
    })
});

const getById =((req, res) => {
    let sql = 'SELECT * FROM user WHERE id = ?'
    db.query(sql, [req.params.id], (err, response) => {
        if (err) throw err
        res.json(response[0])
    })
});

const create = ((req, res) => {
    let data = req.body;
    let sql = 'INSERT INTO user SET ?'
    db.query(sql, [data], (err, response) => {
        if (err) throw err
        res.json({message: 'Insert success!'})
    })
});
const update =((req, res) => {
    let data = req.body;
    let id = req.params.id;
    let sql = 'UPDATE user SET ? WHERE id = ?'
    db.query(sql, [data, id], (err, response) => {
        if (err) throw err
        res.json({message: 'Update success!'})
    })
});

const remove =(req, res) => {
    let sql = 'DELETE FROM user WHERE id = ?'
    db.query(sql, [req.params.id], (err, response) => {
        if (err) throw err
        res.json({message: 'Delete success!'})
    })
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}