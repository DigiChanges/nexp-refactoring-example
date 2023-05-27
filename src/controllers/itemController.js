import ItemService from '../services/ItemService.js';

export async function save(req, res, next)
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

export async function list(req, res, next)
{
	try
  {
		const service = new ItemService();
		const data = await service.list({
      limit: +req.query.limit,
      page: +req.query.page
    });

		res.status(200).json({ data });
	}
  catch (e)
  {
		next(e);
	}
}

export async function getOne(req, res, next)
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

export async function update(req, res, next)
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

export async function remove(req, res, next)
{
	try
  {
		const service = new ItemService();
		const data = await service.delete(req.params);

		res.status(200).json({ data });
	}
  catch (e)
  {
		next(e);
	}
}
