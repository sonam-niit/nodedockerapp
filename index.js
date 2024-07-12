const express=require('express');
const port=3000;
const app= express();

app.get('/',(req,res)=>{
    res.send('Hello from Express')
})
app.get('/news',(req,res)=>{
    res.send('News from Express App')
})
app.listen(port,()=>console.log('Server started'))