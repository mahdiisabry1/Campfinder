import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send("Hello From The Real Estate App")
})

app.listen(3000, ()=> {
    console.log('Serving on port 3000')
})
