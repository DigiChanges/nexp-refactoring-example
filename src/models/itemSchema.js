const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemModelSchema = new Schema({
  name: Schema.Types.String,
  type: Schema.Types.Number,
});

module.exports = mongoose.model("Item", ItemModelSchema);
