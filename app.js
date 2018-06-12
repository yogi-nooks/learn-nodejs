const express = require('express');

const app = express();

//Creating route

app.get('/', (req , res) =>{
    res.send('Hoola Hoop hooo hoo');
})

app.get('/about', (req , res) =>{
    res.send('About Hoola');
})

const port  = 5000;

app.listen(port, () =>{
    console.log(`server started on port  ${port}`);    
});