const express = require('erxpress');

const app = express();

const port  = 5000;

app.listen(port, () =>{
    console.log(`server started on port  ${port}`);    
});