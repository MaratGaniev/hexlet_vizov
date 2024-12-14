import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchReviews } from './redux/actions';
import Filters from './components/Filters';
import ReviewTable from './components/ReviewTable';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchReviews());
	}, [dispatch]);

	return (
		<div>
			<h1>Отзывы</h1>
			<div className="reviews">
				<Filters />
				<ReviewTable />
			</div>
		</div>
	);
};

export default App;
