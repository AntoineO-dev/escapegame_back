const express = require('express');
const app = express();
const cors = require('cors');
const escapegamesRoutes = require('./routes/escapegames_routes');
require('dotenv').config();


app.use(cors());
app.use(express.json());

app.use('/api/escapegames', escapegamesRoutes);


app.listen (process.env.PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${process.env.PORT}`);
});



