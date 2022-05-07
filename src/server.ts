import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import { routes } from './routes';

const app = express();
app.use(express.json());

const port = 3333;

try {
  mongoose.connect(process.env.DATABASE_URL!, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log('MongoDB connected');
} catch (error) {
  console.log(error);
}

app.use(routes);

app.listen(port, () => {
  console.log('HTTP server running on port: ', port);
});
