import express from 'express';
import usersRouter from './routes/users.js';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Backend API',
        version: '1.0.0',
        description: 'Trying Swagger for the first time',
      },
      servers: [
        {
          url: 'http://localhost:8800',
        },
      ],
    },
    apis: ['./routes/*.js'], // paths to files containing annotations as above
  };
  

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(cors());

app.use('/', usersRouter);

app.listen(8800, () => {
    console.log('Server is running on port http://localhost:8800/');
});