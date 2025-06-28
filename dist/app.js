import express, { json } from 'express';
import cors from "cors";
import { ProductRoutes } from './app/modules/products/product.routes.js';
import { OrderRoutes } from './app/modules/orders/order.routes.js';
import { UserRoutes } from './app/modules/users/user.routes.js';
const app = express();
// Middlewares()
app.use(json());
app.use(cors());
// ** Routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/users', UserRoutes);
app.get('/', (req, res) => {
    res.send('Ecommerce Inventory Server is running..!');
});
export default app;
