import express from "express";
import { connect, model,Schema } from "mongoose";
import ejs from "ejs";

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

app.set('view engine', 'ejs')

connect('mongodb://localhost:27017/Authentication')

const user = new Schema({
    username:'String',
    password:'String'
})

const Authentication = new model('auth', user)

app.get('/', (req,res)=> {
    res.render('signup')
})

app.post('/registered', async(req,res)=> {
    console.log(req.body)
    const newuser = Authentication({
        username: req.body.email,
        password: req.body.password
    })
    res.send('You have registred')
    await newuser.save()
    res.redirect('/')
})

app.listen(3000, ()=>{
    console.log('Server Started')
})  