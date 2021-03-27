const {listUsersModel, createUserModel, updateUserModel, deleteUserModel} = require('../models/users')

exports.listUser = (req, res)=>{
    listUsersModel(results => {
        return res.send({
            success: true,
            message: 'List users',
            results
        })
    })
}

exports.createUser = (req, res) => {
    createUserModel(req.body, results => {
        if(results.affectedRows > 0){
            return res.send({
                success: true,
                message: 'Create user successfully'
            })
        }else{
            return res.send({
                success: false,
                message: 'Failed to create user'
            })
        }
    })
}

exports.updateUser = (req, res)=> {
    updateUserModel(req.params.id, req.body, results => {
        if(results.affectedRows > 0){
            return res.send({
                success: true,
                message: 'Update user successfully'
            })
        }else{
            return res.send({
                success: false,
                message: 'Failed to update user'
            })
        }
    })
}

exports.deleteUser = (req, res)=>{
    deleteUserModel(req.params.id, results => {
        if(results.affectedRows > 0){
            return res.send({
                success: true,
                message: 'User has been deleted'
            })
        }else{
            return res.send({
                success: false,
                message: 'Failed to delete User'
            })
        }
    })
}