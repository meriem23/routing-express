const express = require('express')
const app = express()

closedTime = (req,res,next)=>{
    let date= new Date()
    let h = date.getHours()
    console.log('Il est  ' + h +'H, le site ouvre de 8H a 17H' );
    if (h<17 && h>8) next();
};
app.get('/home',closedTime,(req,res)=>{
    res.sendFile(__dirname + '/home.html')
})
app.get('/ourservices',closedTime,(req,res)=>{
    res.sendFile(__dirname + '/ourservices.html')
})
app.get('/contact',closedTime,(req,res)=>{
    res.sendFile(__dirname + '/contact.html')
})

app.listen(5000,(err)=>
{
    if(err) console.log('server is not running')
    else console.log('server is running on port 5000')
})