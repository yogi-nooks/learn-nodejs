const express = require('express');

const app = express();

//Middle ware
app.use(function(req, res, next){
    console.log(Date.now());
    next();
})

//Creating route

app.get('/', (req , res, next) =>{
    req.name = 'yogesh';
    res.send(req.name);
    next();
    

})

app.get('/about', (req , res) =>{
    res.send('About Hoola is there any thing else ');
})

const port  = 5000;

app.listen(port, () =>{
    console.log(`server started on port  ${port}`);    
});