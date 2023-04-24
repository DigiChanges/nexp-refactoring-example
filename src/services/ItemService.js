import Item from '../models/itemSchema.js';
import ItemDao from '../persistence/itemDao.js';

class ItemService
{
    constructor()
    {
        this.itemDao = new ItemDao();
    }

    async getItem(payload)
    {
        if (!payload.id)
        {
            throw new Error('Error payload.');
        }

        return this.itemDao.getOne(payload.id);
    }

    async list()
    {
        return this.itemDao.list();
    }

    async save(payload)
    {
        if (!payload.name || !payload.type)
        {
            throw new Error('Error payload.');
        }

        const item = new Item();
        item.name = payload.name;
        item.type = payload.type;
        await item.save();

        return item;
    }

    async update(payload)
    {
        if (!payload.name || !payload.type)
        {
            throw new Error('Error payload.');
        }

        const item = await Item.findOne({ _id: payload.id });

        item.name = payload?.name ?? item.name;
        item.type = payload?.type ?? item.type;
        await item.save();

        return item;
    }

    async delete(payload)
    {
        if (!payload.id)
        {
            throw new Error('Error payload.');
        }

        return Item.deleteOne({ _id: payload.id });
    }
}

export default ItemService;
