const Item = require('../../persistence/models/itemSchema');

class ItemService
{
    async getItem(payload)
    {
        return Item.findOne({ _id: payload.id });
    }

    async list()
    {
        return Item.find();
    }

    async save(payload)
    {
        const item = new Item();
        item.name = payload.name;
        item.type = payload.type;
        await item.save()

        return item;
    }

    async update(payload)
    {
        const item = await Item.findOne({ _id: payload.id })

        item.name = payload?.name ?? item.name;
        item.type = payload?.type ?? item.type;
        await item.save()

        return item;
    }

    async delete(payload)
    {
        return Item.deleteOne({ _id: payload.id });
    }
}

module.exports = {
  ItemService
}
