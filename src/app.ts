import express, {json} from 'express';
import cors from "cors";
import { ProductRoutes } from './app/modules/products/product.routes';
import { OrderRoutes } from './app/modules/orders/order.routes';
import { UserRoutes } from './app/modules/users/user.routes';
const app = express();


// Middlewares()
app.use(json());
app.use(cors());


// ** Routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/users', UserRoutes);


export default app;
