const { Router } = require("express");
const { save,getOne, list, update, remove} = require("../controllers/itemController");

const ItemRouter = new Router();

ItemRouter.post("/", save);
ItemRouter.get("/", list);
ItemRouter.get("/:id", getOne);
ItemRouter.put("/:id", update);
ItemRouter.delete("/:id", remove);

module.exports = {
  ItemRouter
}
