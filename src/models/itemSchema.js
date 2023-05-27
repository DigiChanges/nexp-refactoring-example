import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

const ItemModelSchema = new Schema({
	name: { type: Schema.Types.String, required: true },
	type: { type: Schema.Types.Number }
});

ItemModelSchema.plugin(paginate);

const Item = mongoose.model('Item', ItemModelSchema);

export default Item;
