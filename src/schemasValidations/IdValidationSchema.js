
let IdValidationSchema = {
  name: 'IdValidationSchema',
  properties: {
    id: [
      {
        type: 'IsUUID', // validation type. All validation types are listed in ValidationTypes class.
        constraints: ['4'],
      },
    ],
  },
};

module.exports = {
  IdValidationSchema
}
