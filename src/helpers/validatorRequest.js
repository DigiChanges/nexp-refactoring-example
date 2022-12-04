const { validate, registerSchema } = require('class-validator');
const _ = require('lodash');

async function register(schemas)
{
    schemas.forEach( (schema) => {
      registerSchema(schema)
    });
}

async function validatorRequest(schema, data)
{
    const errors = await validate(schema, data);

    if (!_.isEmpty(errors))
    {
        throw new Error('Failed Request.');
    }
}

module.exports = {
  register,
  validatorRequest
}
