// require Mongoose
import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

const SubCategorySchema =mongoose.Schema({
  _id:Number,
  catname:{
    type:String,
    required:[true,"Categoty is requried"],
    lowercase:true,
    trim:true,
  },
  subcatname:{
    type:String,
    unique:true,
    required:[true,"SubCategory is required"],
    lowercase:true,
    trim:true,
  },
  subcaticonname:{
    type:String,
    required:[true,"Subcategory is required"],
    lowercase:true,
    trim:true
  }
  
});

// Apply the uniqueValidator plugin to UserSchem
SubCategorySchema.plugin(UniqueValidator);
// compile Schema to model
const SubCategorySchemaModel=mongoose.model('subcategory_collection',SubCategorySchema);

export default SubCategorySchemaModel