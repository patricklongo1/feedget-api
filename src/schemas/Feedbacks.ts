import { Schema, model } from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const FeedbacksSchema = new Schema({
  type: String,
  comment: String,
  screenshot: String,
});

FeedbacksSchema.plugin(aggregatePaginate);

export default model('Feedbacks', FeedbacksSchema);
