import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_REVIEWS, setReviews } from './actions';

const reviews = [
	{
		id: 1,
		platform: 'Google',
		rating: 4,
		date: '2023-11-15T10:00:00Z',
		text: 'Отличный сервис!',
	},
	{
		id: 2,
		platform: 'Яндекс',
		rating: 3,
		date: '2023-11-14T09:00:00Z',
		text: 'Хорошо, но есть недочеты.',
	},
	{
		id: 3,
		platform: '2ГИС',
		rating: 5,
		date: '2023-11-13T08:00:00Z',
		text: 'Прекрасно!',
	},
	{
		id: 4,
		platform: 'Яндекс',
		rating: 4,
		date: '2023-11-18T10:00:00Z',
		text: 'Отличный сервис!',
	},
	{
		id: 5,
		platform: 'Яндекс',
		rating: 3,
		date: '2023-11-13T09:00:00Z',
		text: 'Хорошо, но есть недочеты.',
	},
	{
		id: 6,
		platform: '2ГИС',
		rating: 1,
		date: '2023-11-21T08:00:00Z',
		text: 'Прекрасно!',
	},
	{
		id: 7,
		platform: 'Google',
		rating: 5,
		date: '2023-11-16T10:00:00Z',
		text: 'Отличный сервис!',
	},
	{
		id: 8,
		platform: 'Яндекс',
		rating: 2,
		date: '2023-12-16T09:00:00Z',
		text: 'Хорошо, но есть недочеты.',
	},
	{
		id: 9,
		platform: 'Яндекс',
		rating: 3,
		date: '2023-12-13T08:00:00Z',
		text: 'Прекрасно!',
	},
];

function* fetchReviewsSaga() {
	try {
		const response = yield fetch('https://reviewsdb.ru/api/reviews');
		yield put(setReviews(response.data));
	} catch (error) {
		console.error('Error fetching reviews:', error);
		yield put(setReviews(reviews));
	}
}

export function* watchFetchReviews() {
	yield takeEvery(FETCH_REVIEWS, fetchReviewsSaga);
}
