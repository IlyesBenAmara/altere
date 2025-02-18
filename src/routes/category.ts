import { Router } from "express";
import { getCategory, getCategories } from "../controllers/category";

const categoryRouter = Router();

categoryRouter.get("/:id", getCategory);
categoryRouter.get("/all", getCategories);
categoryRouter.put("", getCategories);
categoryRouter.post("", getCategories);
categoryRouter.delete("", getCategories);

export default categoryRouter;
