import z from 'zod';
import itemCreateValidation from './itemCreateValidation.js';
import idValidation from './idValidation.js';

const itemUpdateValidation = z.union([
  idValidation,
  itemCreateValidation
]);

export default itemUpdateValidation;
