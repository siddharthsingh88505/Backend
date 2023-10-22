import mongoose from "mongoose";

// schema design
const orderSchema = new mongoose.Schema({
    ref_id: String,
    cloth_id: String,
    fullname: String,
    mobileno: String,
    pincode: String,
    address: String,
    city: String,
    state: String,
    amount: Number,
    razorpayOrderId: String,
    orderStatus: String,
});

// compile schema
const OrderModel = mongoose.model('Order', orderSchema);

export { OrderModel };
