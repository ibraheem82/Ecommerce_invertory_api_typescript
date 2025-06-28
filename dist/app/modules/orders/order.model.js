import { model, Schema } from 'mongoose';
const OrderSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
export const OrderModel = model("Order", OrderSchema);
