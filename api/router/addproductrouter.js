import express from 'express';
import * as productController from '../controller/productcontroller.js';

var router = express.Router();

router.post("/save",productController.save);

router.get("/fetch",productController.fetch);

export default router;
