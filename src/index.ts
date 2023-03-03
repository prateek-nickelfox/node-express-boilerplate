import express from 'express';
import swaggerUi from 'swagger-ui-express';
import db from './models';
import greetingRoutes from './routes/user-routes'
// import swaggerDocument from './swagger/swagger.yaml';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/greeting', greetingRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

db.sequelize.sync().then(() => {
  console.log('Database connected successfully');
}).catch((error) => {
  console.error('Database connection error', error);
});
