const {IdValidationSchema} = require("./IdValidationSchema");
const {ItemUpdateValidationSchema} = require("./ItemUpdateValidationSchema");
const {ItemValidationSchema} = require("./ItemValidationSchema");

const schemasValidations = [
    IdValidationSchema,
    ItemUpdateValidationSchema,
    ItemValidationSchema
]

module.exports = {
  schemasValidations
}
