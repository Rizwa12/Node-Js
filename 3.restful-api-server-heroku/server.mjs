import express from 'express'
import cors from 'cors'
const app = express();
app.use(express.json()) // decode data
app.use(cors())
const port = process.env.PORT || 3000;
let users=[];

//user is created
app.post('/user',(req,res)=>{
    console.log(req.body)
    users.push(req.body)
    res.send("user is created")
})
//user is get
app.get('/user',(req,res)=>{
    res.send(users)
})
//user is modified
app.put('/user',(req,res)=>{
    res.send("user is modified")
})
app.delete('/user',(req,res)=>{
    res.send("user is succesfully deleted")
})


app.get('/', (req, res) => {
    console.log("ak request server par ahe")
  res.send('Hello World!')
})
app.get('/profile',(req,res)=>{
    console.log("ak request server par ahe");
    res.send('this is a profile')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})