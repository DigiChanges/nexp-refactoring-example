const _ = require('lodash');
const ValidationModel = require('./Presentation/Shared/ValidationModel');
const StatusCode = require('./statusCode');

const formatError = (errorHttpException) =>
{
    const { statusCode, message, errors, metadata, errorCode } = errorHttpException;
    const validationModels = [];

    if (!_.isEmpty(errors))
    {
        for (const error of errors)
        {
            const validationModel = new ValidationModel(error);
            validationModels.push(validationModel);
        }
    }

    return {
        message: statusCode.code === StatusCode.HTTP_INTERNAL_SERVER_ERROR.code ? 'Internal Error Server' : message,
        errorCode,
        errors: _.isEmpty(validationModels) ? null : validationModels,
        metadata
    };
};

module.exports = {
  formatError
}
