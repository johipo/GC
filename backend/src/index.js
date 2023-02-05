import express from 'express';
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello World Back!!!')
});

app.listen(PORT, () =>{
    console.log(`Servidor na porta: ${PORT}`);
});