import express from 'express';
import * as subcategoryController from '../controller/subcatergory.controller.js';

var router =express.Router();

router.post("/save",subcategoryController.save);

router.get("/fetch",subcategoruController.fetch);

router.delete("/delete/:id",subcategoryController.deleteSubcategory);

router.patch("/update",subcategoryController.updatesubcategory);

export default router;