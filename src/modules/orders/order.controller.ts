import { Request, Response } from "express"
import orderValidationSchema from "./order.validation"
import { Product } from "../products/product.model";
import { OrderServices } from "./order.services";


//  Since you're using async, your function always returns a Promise implicitly.
const createOrder = async(req: Request, res: Response): Promise<any> => {
    try {
    //zod validation
    // Uses Zod's safeParse to validate the request body against a schema
   
    const zodValidation = orderValidationSchema.safeParse(req.body);
     /*
        * -> If validation fails:

* -> Extracts all error messages from the ZodError

* -> Returns a 500 response with the error messages

* -> The return stops further execution
    */
    if( typeof zodValidation.error !== "undefined"  && zodValidation.error.name === "ZodError") {
        const errorLists = zodValidation.error.issues.map((err) => err.message);
        return res.status(500).json({
            success: false,
            message: "Validation error",
            errors: errorLists
        })
    } 

    /*
        If validation passes, finds the product by ID

Checks if requested quantity exceeds available inventory

If insufficient quantity, returns a 400 error response

    */
    if(zodValidation.success) {
        const product = await Product.findById(zodValidation.data.productId);
        if(product && product.inventory.quantity < zodValidation.data.quantity) {
            return res.status(400).json({
                success: false,
                message: "Insufficient quantity available in this inventory"
            })
        }

        if(product) {
            // we have total 70 products
            //product.inventory.quantity = 60
            /*
                Updates the product inventory:

Reduces the available quantity

Sets inStock to false if quantity reaches 0


Saves the updated product

Returns a success response with the new order data


*/
product.inventory.quantity = product.inventory.quantity -zodValidation.data.quantity;
product.inventory.inStock = product.inventory.quantity === 0 ? false : true;
// Creates a new order using a service
            const newOrder = await OrderServices.createANewOrder(zodValidation.data);

            await product.save();
            return res.status(200).json({
                success: true,
                message: "Order placed successfully",
                data: newOrder
            })
        }
    }
     
    } catch (err: any) {
     res.status(500).json({
         success: false,
         message: err.message ||  "Something went wrong",
         error: err
     })
    }
 };



 

 export const OrderController = {
    createOrder
    // handleGetAllOrders
 }