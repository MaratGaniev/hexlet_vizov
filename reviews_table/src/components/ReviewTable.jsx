import { useSelector } from 'react-redux';

const ReviewTable = () => {
	const { reviews, filters } = useSelector(state => state);

	const filteredReviews = reviews
		.filter(
			review =>
				(filters.platform ? review.platform === filters.platform : true) &&
				review.rating >= filters.ratingFrom &&
				review.rating <= filters.ratingTo
		)
		.sort((a, b) => {
			if (filters.sortBy === 'date') {
				return filters.sortOrder === 'asc'
					? new Date(a.date) - new Date(b.date)
					: new Date(b.date) - new Date(a.date);
			} else {
				return filters.sortOrder === 'asc'
					? a.rating - b.rating
					: b.rating - a.rating;
			}
		});

	return (
		<table className="reviews__list">
			<thead>
				<tr>
					<th>Платформа</th>
					<th>Рейтинг</th>
					<th>Время добавления</th>
					<th>Текст отзыва</th>
				</tr>
			</thead>
			<tbody>
				{filteredReviews.map(review => (
					<tr key={review.id}>
						<td>{review.platform}</td>
						<td>{review.rating}</td>
						<td>{new Date(review.date).toLocaleString()}</td>
						<td>{review.text}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ReviewTable;
