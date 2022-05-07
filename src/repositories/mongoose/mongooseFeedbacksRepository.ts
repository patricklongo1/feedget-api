import {
  FeedbackCreateData,
  FeedbacksRepository,
} from '../FeedbacksRepository';

export class MongooseFeedbacksRepository implements FeedbacksRepository {
  create(data: FeedbackCreateData) {}
  console.log('teste')
}
