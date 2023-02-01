const express = require('express');
const dotenv = require('dotenv');

const port = process.env.PORT || 3030
const app = express();

/* routes */
const user = require('./routes/user.route');
const produto = require('./routes/produto.route');


/* midewals */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config(); 


/* routes */
app.use('/user', user);
app.use('/produto', produto);

/* serve */
app.listen(port, () => {
    console.log(`server on port ${port}`);
}
);
