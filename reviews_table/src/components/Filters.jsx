import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../redux/actions';

const Filters = () => {
	const dispatch = useDispatch();
	const filters = useSelector(state => state.filters);

	const handleChange = e => {
		const { name, value } = e.target;
		dispatch(setFilters({ [name]: value }));
	};

	return (
		<div className='filters'>
			<select name='platform' onChange={handleChange}>
				<option value=''>Все платформы</option>
				<option value='Google'>Google</option>
				<option value='Яндекс'>Яндекс</option>
				<option value='2ГИС'>2ГИС</option>
			</select>
			<input
				className='filters__rating'
				type='number'
				name='ratingFrom'
				value={filters.ratingFrom}
				onChange={handleChange}
				placeholder='Рейтинг от'
			/>
			<input
				className='filters__rating'
				type='number'
				name='ratingTo'
				value={filters.ratingTo}
				onChange={handleChange}
				placeholder='Рейтинг до'
			/>
			<select name='sortBy' onChange={handleChange}>
				<option value='date'>Сортировать по времени</option>
				<option value='rating'>Сортировать по оценке</option>
			</select>
			<select name='sortOrder' onChange={handleChange}>
				<option value='desc'>По убыванию</option>
				<option value='asc'>По возрастанию</option>
			</select>
		</div>
	);
};

export default Filters;
