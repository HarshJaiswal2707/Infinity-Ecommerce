import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    section: String,
    url: String,
    title: String,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const Product = mongoose.model('product', productSchema);
export default Product;