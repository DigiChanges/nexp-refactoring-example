const Router = require("koa-router");
const { save,getOne, list, update, remove} = require("../controllers/itemController");

const routerOpts = {
    prefix: "/api/items"
};

const ItemRouter = new Router(routerOpts);

ItemRouter.post("/", save);
ItemRouter.get("/", list);
ItemRouter.get("/:id", getOne);
ItemRouter.put("/:id", update);
ItemRouter.delete("/:id", remove);

module.exports = {
  ItemRouter
}
