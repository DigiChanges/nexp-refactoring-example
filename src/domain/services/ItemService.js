const Item = require('../../persistence/models/itemSchema');

class ItemService
{
    async getItem(payload)
    {
        return Item.findOne({ _id: payload.id });
    }

    async list(payload)
    {
        const { skip, limit } = payload;
        return (skip && limit) ? Item.find().skip(skip).limit(limit) : [];
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
