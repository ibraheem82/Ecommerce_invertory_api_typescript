import express, {json} from 'express';
import cors from "cors";
import { ProductRoutes } from './modules/products/product.routes';
const app = express();


// Middlewares()
app.use(json());
app.use(cors());


// ** Routes
app.use('/api/products', ProductRoutes)

export default app;
