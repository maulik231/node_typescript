import express, { Application, Request, Response } from 'express'
import routes from './routes'
import db from './models';
import seeders from './seeder';
import 'dotenv/config';

const app: Application = express()
const { PORT } = process.env;

db.sequelize.authenticate()
  .then(async () => {
    await db.sequelize.sync({ force: false })
  }).catch((err) => {
    console.log("Connection Error", err)
  });

// seeders().then((status) => console.log(status)).catch((error) => console.log(error));

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: `Welcome to the API! \n Endpoints available at http://localhost:${PORT}/api/v1` })
})

app.use('/api', routes)

try {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`)
}