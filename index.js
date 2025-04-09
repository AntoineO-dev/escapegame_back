const express = require('express');
const app = express();
const cors = require('cors');
const escapegamesRoutes = require('./routes/escapegamesRoutes');
const reservationsRoutes = require('./routes/reservationsRoutes');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());

app.use('/api/escapegames', escapegamesRoutes);
app.use('/api/reservations', reservationsRoutes);


app.listen (process.env.PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${process.env.PORT}`);
});



