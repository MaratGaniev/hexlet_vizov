import { SET_REVIEWS, SET_FILTERS } from './actions';

const initialState = {
	reviews: [],
	filters: {
		platform: '',
		ratingFrom: '',
		ratingTo: 5,
		sortBy: 'date', // 'date' or 'rating'
		sortOrder: 'desc', // 'asc' or 'desc'
	},
};

const reviewsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_REVIEWS:
			return { ...state, reviews: action.reviews };
		case SET_FILTERS:
			return { ...state, filters: { ...state.filters, ...action.filters } };
		default:
			return state;
	}
};

export default reviewsReducer;
