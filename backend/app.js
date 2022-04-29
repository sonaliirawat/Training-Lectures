const express = require('express')
const mongoDb = require('./mongoConnect')
const app = new express();
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept,Authorization,Cache-Control',
    );
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});

app.get('/harrawala',(req,res)=>{
     res.json(true);
})
app.get('/doiwala',(req,res)=>{
    res.json();
})

app.listen(4000,function(){
    console.log('test')
});