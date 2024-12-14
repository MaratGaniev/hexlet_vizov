export const FETCH_REVIEWS = 'FETCH_REVIEWS';
export const SET_REVIEWS = 'SET_REVIEWS';
export const SET_FILTERS = 'SET_FILTERS';

export const fetchReviews = () => ({ type: FETCH_REVIEWS });
export const setReviews = reviews => ({ type: SET_REVIEWS, reviews });
export const setFilters = filters => ({ type: SET_FILTERS, filters });
