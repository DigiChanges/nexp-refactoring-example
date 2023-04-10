const { ItemService} = require("../services/ItemService");
const {next} = require("lodash/seq");

async function save(req, res, next)
{
    try
    {
        const service = new ItemService();
        const data = await service.save(req.body);

        res.status(201).json({ data });
    }
    catch (e)
    {
        next(e);
    }
}

async function list(req, res, next)
{
   try
    {
        const service = new ItemService();
        const data = await service.list(req.body);

        res.status(200).json({ data });
    }
    catch (e)
    {
        next(e);
    }
}

async function getOne(req, res, next)
{
    try
    {
        const service = new ItemService();
        const data = await service.getItem({ ...req.body, ...req.params });

        res.status(200).json({ data });
    }
    catch (e)
    {
        next(e);
    }
}

async function update(req, res, next)
{
    try
    {
        const service = new ItemService();
        const data = await service.update({ ...req.body, ...req.params });

        res.status(200).json({ data });
    }
    catch (e)
    {
        next(e);
    }
}

async function remove(req, res)
{
    try
    {
        const service = new ItemService();
        const data = await service.delete(req.params);

        res.status(200).json({data});
    }
    catch (e)
    {
        next(e);
    }
}

module.exports = {
      save,
      list,
      getOne,
      update,
      remove
}
