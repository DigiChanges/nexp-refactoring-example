import { Router } from 'express';
import { save, getOne, list, update, remove } from '../controllers/itemController.js';

const ItemRouter = new Router();

ItemRouter.post('/', save);
ItemRouter.get('/', list);
ItemRouter.get('/:id', getOne);
ItemRouter.put('/:id', update);
ItemRouter.delete('/:id', remove);

export default ItemRouter;
