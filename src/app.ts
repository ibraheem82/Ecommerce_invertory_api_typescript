import express, {json} from 'express';
import cors from "cors";
import { ProductRoutes } from './modules/products/product.routes';
import { OrderRoutes } from './modules/orders/order.routes';
import { UserRoutes } from './modules/users/user.routes';
const app = express();


// Middlewares()
app.use(json());
app.use(cors());


// ** Routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/users', UserRoutes);


export default app;
