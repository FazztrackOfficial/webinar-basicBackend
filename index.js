const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

//route import
const userRoute = require('./src/routes/users')
app.use('/users', userRoute)

app.get('/', (req, res)=>{
    //code
    const data = {
        success: true,
        message: "Backend is running well and started from nodemon"
    }
    return res.send(data)
})

app.post('/login', (req, res)=>{
    // const email = req.body.email
    // const password = req.body.password
    const {email, password} = req.body
    if(email==="admin@server.com" && password === "1234"){
        return res.send({
            success: true,
            message: 'Login successfully'
        })
    }else{
        return res.send({
            success: false,
            message: 'Wrong email or password'
        })
    }
})

app.listen(8080, ()=>{
    console.log('App listening on port 8080')
})