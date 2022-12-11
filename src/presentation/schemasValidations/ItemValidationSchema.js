
let ItemValidationSchema = {
  name: 'ItemValidationSchema',
  properties: {
    name: [
      {
        type: 'minLength', // validation type. All validation types are listed in ValidationTypes class.
        constraints: [2],
      },
      {
        type: 'maxLength',
        constraints: [20],
      },
    ],
    type: [
      {
        type: 'isInt',
        constraints: [2],
      }
    ],
  },
};

module.exports = {
  ItemValidationSchema
}
