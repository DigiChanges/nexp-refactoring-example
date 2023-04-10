import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemModelSchema = new Schema({
  name: Schema.Types.String,
  type: Schema.Types.Number
});

const Item = mongoose.model('Item', ItemModelSchema);

export default Item;
