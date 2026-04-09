import express from 'express'

const app = express();

const port =2000;

app.get('/',(req,res) => {
    res.send("you are requested for home route")
})


app.get('/srk',(req,res) => {
    res.send('here is some info about me ')
})
app.listen(port,()=>console.log(`server is running on port ${port}`))