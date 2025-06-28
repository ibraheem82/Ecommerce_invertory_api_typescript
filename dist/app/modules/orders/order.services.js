import { OrderModel } from "./order.model.js";
const createANewOrder = async (orderData) => {
    return await OrderModel.create(orderData);
};
const getAllOrdersFromDB = async (query) => {
    const filter = query ? { email: query } : {};
    return await OrderModel.find(filter);
};
export const OrderServices = {
    createANewOrder,
    getAllOrdersFromDB
};
