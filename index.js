const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const escapegamesRoutes = require('./routes/escapegamesRoutes');
const reservationsRoutes = require('./routes/reservationsRoutes');
const clientsRoutes = require('./routes/clientsRoutes');
const paymentsRoutes = require('./routes/paymentsRoutes');
const payRoutes = require('./routes/payRoutes');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/escapegames', escapegamesRoutes);
app.use('/api/reservations', reservationsRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/pay', payRoutes);
app.use('/api/upload', uploadRoutes);



app.listen (process.env.PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${process.env.PORT}`);
});



