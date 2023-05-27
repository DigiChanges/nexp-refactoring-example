import itemSchema from '../models/itemSchema.js';

class ItemDao
{
	async create(data)
  {
		const item = await itemSchema.create(data);

		return {
			id: item._id,
			name: item.name,
			type: item.type
		};
	}

	async update(payload)
  {
		const { id, name, type } = payload;

		const item = await itemSchema.findByIdAndUpdate(
			id,
			{ name, type },
			{ new: true }
		);

    if (!item)
    {
      throw new Error('Item not found.');
    }

		return {
			id: item._id,
			name: item.name,
			type: item.type
		};
	}

	async getOne(id)
  {
		const item = await itemSchema.findOne({ _id: id }).lean();

    if (!item)
    {
      throw new Error('Item not found.');
    }

		return {
			id: item._id,
			name: item.name,
			type: item.type
		};
	}

	async list(limit, page)
  {
    const pagination = {
      limit: limit ?? 10,
      page: page ?? 1
    };

		const items = await itemSchema.paginate({}, pagination);

    items.docs = items.docs.map(item => ({
			id: item._id,
			name: item.name,
			type: item.type
    }));

		return items;
	}

	async delete(id)
  {
		await itemSchema.findByIdAndRemove(id);
	}
}

export default ItemDao;
