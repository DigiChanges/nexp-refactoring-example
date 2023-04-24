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

        return this.itemDao.create(payload);
    }

    async update(payload)
    {
        if (!payload.name || !payload.type)
        {
            throw new Error('Error payload.');
        }

        return await this.itemDao.update(payload);
    }

    async delete(payload)
    {
        if (!payload.id)
        {
            throw new Error('Error payload.');
        }

        return this.itemDao.delete(payload.id);
    }
}

export default ItemService;
