import '../model/connection.js';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

//to link schema model
import ProductSchemaModel from '../model/productmodel.js';

export var save = async (req, response, next) => {
  var catname = req.body.catnm
  var subcatname = req.body.subcatnm
  var productname = req.body.productnm
  var producticon = req.files.producticon
  var producticonname = Date.now() + "-" + producticon.name;
  var producttittle = req.body.prodittle;
  var productprice = req.body.prodprice;
  var uploadpath = path.join(__dirname, "../../UI/public/assets/uploads/producticons", producticonname);
  producticon.mv(uploadpath);
  var productList = await ProductSchemaModel.find();
  var l = productList.length;
  var _id = l == 0 ? 1 : productList[l - 1]._id + 1;
  var productDetails = { "_id": _id, "catname": catname, "subcatname": subcatname, "productname": productname, "producticonname": producticonname, "producttittle": producttittle, "productprice": productprice };
  var product = await ProductSchemaModel.create(productDetails);
  if (product)
    return response.status(201).json({ "msg": "success" });
  else
    return response.status(500).json({ error: 'Server Error' });
}

export var fetch = async (req, response, next) => {
  var condition_obj = url.parse(req.url, true).query;
  var productList = await ProductSchemaModel.find(condition_obj);
  if (productList.length != 0)
    return response.status(201).json(productList);
  else
    return response.status(500).json(productList);
}

