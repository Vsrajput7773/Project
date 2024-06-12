//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ProductSchema = mongoose.Schema({
  _id: Number,
  catname: {
    type: String,
    required: [true,"Category is required"],
    lowercase: true,
    trim: true,
  },
  subcatname: {
    type: String,
    required: [true,"SubCategory is required"],
    lowercase: true,
    trim: true,
  },
  productname: {
    type: String,
    required: [true,"Product name is required"],
    lowercase: true,
    trim: true,
  },
  producticonname: {
    type: String,
    required: [true,"Product icon is required"],
    trim: true
  },
  producttittle: {
    type: String,
    required: [true,"Product Tittle is required"],
    lowercase: true,
    trim: true,
  },
  productprice: {
    type: String,
    required: [true,"Product Base Price  is required"],
    lowercase: true,
    trim: true,
  },
});

// Apply the uniqueValidator plugin to SubCategorySchema.
ProductSchema.plugin(uniqueValidator);

// compile schema to model
const ProductSchemaModel = mongoose.model('product_collection',ProductSchema);

export default ProductSchemaModel;