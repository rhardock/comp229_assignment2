import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    description: {
        type: String,
        trim: true,
        required: 'Description is required'
    },
    price: {
        type: Number,
        required: 'Price is required'
    },
    quantity: {
        type: Number,
        required: 'Quantity is required'
    },
    category: {
        type: String,
        trim: true,
        required: 'Category is required'
    }
});

export default mongoose.model('Product', ProductSchema);
