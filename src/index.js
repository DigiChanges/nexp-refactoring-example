require('dotenv').config();

const {schemasValidations} = require("./presentation/schemasValidations");
const mongoose = require('mongoose');
const { App } = require('./app');
const { register } = require('./helpers/validatorRequest');

void (async() =>
{
    try
    {
        await register(schemasValidations);

        mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, { useNewUrlParser: true })
        .then(() => {
          const app = new App()

          app.initConfig()
          app.build()
          app.listen()
        })
    }
    catch (error)
    {
        console.log('Error while connecting to the database', error);
        throw error;
    }
})();
