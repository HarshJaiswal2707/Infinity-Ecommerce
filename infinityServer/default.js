import { products } from "./constant/data.js";
import Product from "./model/productSchema.js";
export const defaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Data inserted Successfully.");
    } catch (error) {
        console.log(error.message);
    }
};