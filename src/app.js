const express = require('express');
const app = express();
const port =  process.env.PORT ||3000

/* routes */
const usuario = require('./routes/usuario');


/* midewals */
app.use(express.json());
app.use(express.urlencoded({extended: false}));


/* routes */
app.use('/usuario', usuario);

/* serve */
app.listen(port, () => {
    console.log(`server on port ${port}`);
}
);
