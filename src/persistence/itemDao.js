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

  async update(id, data)
  {
    const item = await itemSchema.findByIdAndUpdate(id, data);

    return {
      id: item._id,
      name: item.name,
      type: item.type
    };
  }

  async getOne(id)
  {
    const item = await itemSchema.findOne({ _id: id }).lean();

    return {
      id: item._id,
      name: item.name,
      type: item.type
    };
  }

  async list()
  {
    const items = await itemSchema.find().lean();

    return items.map(item => ({
      id: item._id,
      name: item.name,
      type: item.type
    }));
  }

  async delete(id)
  {
    await itemSchema.findByIdAndRemove(id);
  }
}

export default ItemDao;
