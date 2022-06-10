const express = require("express");

const app =  express();
const dbconf = require("./db")

app.use(express.json())

const room = require('./router/room')
const reserve = require('./router/reserveroom')


app.use('/getroom',room);
app.use('/reservation',reserve);



const appUses = [
    { apiPath: '/getroom', routerPath: './router/room' },
    { apiPath: '/api/users', routerPath: './router/users' }
]

appUses.forEach(use => {
    app.use(use.apiPath, require(use.routerPath));
})

const port = process.env.port || 8888;
app.listen(port, () => console.log(`server started using port ${port}`));

