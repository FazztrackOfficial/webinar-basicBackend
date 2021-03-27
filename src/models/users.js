const db = require('../helpers/db')

exports.listUsersModel = (cb)=>{
   db.query('SELECT * FROM users', (err, results, _fields)=>{
    if(err) throw new Error(err)
    cb(results)
   })
}

exports.createUserModel = (data, cb)=> {
    db.query(`INSERT INTO users (name, birthdate, phone) VALUES ('${data.name}', '${data.bithdate}', '${data.phone}')`, (err, results, _fields)=>{
        if(err) throw new Error(err)
        cb(results)
    })
}

exports.updateUserModel = (id, data, cb)=> {
    db.query(`UPDATE users SET name='${data.name}', birthdate='${data.birthdate}', phone='${data.phone}' WHERE id=${id}`, (err, results, _fields)=>{
        if(err) throw new Error(err)
        cb(results)
    })
}

exports.deleteUserModel = (id, cb) => {
    db.query(`DELETE FROM users WHERE id=?`,[id], (err, results, _fields)=> {
        if(err) throw new Error(err)
        cb(results)
    })
}