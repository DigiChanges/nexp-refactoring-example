const { ItemValidationSchema } = require('./ItemValidationSchema')
const { IdValidationSchema } = require('./IdValidationSchema')

let ItemUpdateValidationSchema = {
  name: 'ItemUpdateValidationSchema',
  properties: {
    ...ItemValidationSchema.properties,
    ...IdValidationSchema.properties
  },
};

module.exports = {
  ItemUpdateValidationSchema
}
