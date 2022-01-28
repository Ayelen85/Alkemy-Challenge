import  express, { json } from 'express';
import morgan from 'morgan';

// Importing routes
import authRoutes from './routes/auth';
import usersRoutes from './routes/users';


// intialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

export default app;
