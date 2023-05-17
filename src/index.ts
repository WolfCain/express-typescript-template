import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

const ads = [
    {title: 'Hello, world (again)!'}
  ];

app.use(cors());

app.use(helmet());

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send(ads);
})

app.listen(4000, () => {
    console.log('Server running on port 4000');
});

