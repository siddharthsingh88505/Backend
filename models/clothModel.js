import mongoose from "mongoose";

// schema design
const clothSchema = new mongoose.Schema({
    brand_name: {type:String,trim:true,required:true},
    cloth_name: {type:String,trim:true,required:true},
    original_price: {type:Number,trim:true,required:true},
    discount_percent: {type:Number,trim:true,required:true},
    discounted_price: {type:Number,trim:true,required:true},
    cloth_type: { type: String, trim: true, required: true },
    category: {type:String,trim:true,required:true},
    cloth_material: {type:String,trim:true,required:true},
    cloth_color: {type:String,trim:true,required:true},
    production_country: { type: String, trim: true, required: true },
    images: {type:Array,required:true}
})

// compile schema
const clothModel = mongoose.model("cloth", clothSchema);

export { clothModel };