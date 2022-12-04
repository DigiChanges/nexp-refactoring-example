const {validatorRequest } = require("../helpers/validatorRequest");
const { ItemService} = require("../services/ItemService");
const {StatusCode } = require("../helpers/statusCode");

async function save(ctx)
{
    await validatorRequest('ItemValidationSchema', ctx.request.body);

    const service = new ItemService();
    const data = await service.save(ctx.request.body);

    ctx.status = StatusCode.HTTP_CREATED.code;

    return ctx.body = {
        data
    };
}

async function list(ctx)
{
    const service = new ItemService();
    const data = await service.list(ctx.request.body);

    ctx.status = StatusCode.HTTP_OK.code;

    return ctx.body = {
        data
    };
}

async function getOne(ctx)
{
    const service = new ItemService();
    const data = await service.getItem({ ...ctx.request.body, ...ctx.params });

    ctx.status = StatusCode.HTTP_OK.code;

    return ctx.body = {
        data
    };
}

async function update(ctx)
{
    const service = new ItemService();
    const data = await service.update({ ...ctx.request.body, ...ctx.params });

    ctx.status = StatusCode.HTTP_CREATED.code;

    return ctx.body = {
        data
    };
}

async function remove(ctx)
{
    const service = new ItemService();
    const data = await service.delete(ctx.params);

    ctx.status = StatusCode.HTTP_CREATED.code;

    return ctx.body = {
        data
    };
}

module.exports = {
      save,
      list,
      getOne,
      update,
      remove
}
