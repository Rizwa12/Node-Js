 import express from 'express';
 import cors from 'cors';
const app = express()
app.use(cors());
const port = 3000

app.get('/home', (req, res) => {
  res.send('i am a home page')
})

app.get('/profile',(req,res)=>{
  res.send('I am a profile a page')
})
app.get('/weather',(req,res)=>{
  res.send({
    weather:'Sunny',
    temperature:'20',
    city:'London'
  })
})
app.listen(port, () => {
  console.log(`Hello world server listening on port ${port}`)
})
