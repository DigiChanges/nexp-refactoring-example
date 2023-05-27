import ItemDao from '../persistence/itemDao.js';
import idValidation from '../validations/idValidation.js';
import itemCreateValidation from '../validations/itemCreateValidation.js';
import itemUpdateValidation from '../validations/itemUpdateValidation.js';
import criteriaValidation from '../validations/criteriaValidation.js';

class ItemService
{
	constructor()
  {
		this.itemDao = new ItemDao();
	}

	async getItem(payload)
  {
    await idValidation.parseAsync(payload);

    if (!payload.id)
    {
			throw new Error('Error payload.');
		}

		return this.itemDao.getOne(payload.id);
	}

	async list(pagination)
  {
    await criteriaValidation.parseAsync(pagination);

    const { limit, page } = pagination;
		return this.itemDao.list(limit, page);
	}

	async save(payload)
  {
    await itemCreateValidation.parseAsync(payload);

    if (!payload.name || !payload.type)
    {
			throw new Error('Error payload.');
		}

		return this.itemDao.create(payload);
	}

	async update(payload)
  {
    await itemUpdateValidation.parseAsync(payload);

		if (!payload.name || !payload.type)
    {
			throw new Error('Error payload.');
		}

		return await this.itemDao.update(payload);
	}

	async delete(payload)
  {
    await idValidation.parseAsync(payload);

		if (!payload.id)
    {
			throw new Error('Error payload.');
		}

		return this.itemDao.delete(payload.id);
	}
}

export default ItemService;
