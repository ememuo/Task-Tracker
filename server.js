const express = require("express") 
const app = express()
app.set('view engine', 'ejs')


app.listen(4000, ()=> {
    console.log('Server is running')
})