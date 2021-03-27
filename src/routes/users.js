const route = require('express').Router()

const {listUser, createUser, updateUser, deleteUser} = require('../controllers/users')

route.get('/', listUser)
route.post('/', createUser)
route.patch('/:id', updateUser)
route.delete('/:id', deleteUser)

module.exports = route