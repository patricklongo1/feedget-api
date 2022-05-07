import {
  FeedbackCreateData,
  FeedbacksRepository,
} from '../FeedbacksRepository';

export class MongooseFeedbacksRepository implements FeedbacksRepository {
  create(data: FeedbackCreateData) {}
}
