import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reviewsReducer from './reducers';
import { watchFetchReviews } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reviewsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchReviews);

export default store;
