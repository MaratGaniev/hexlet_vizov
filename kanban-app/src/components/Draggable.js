'use client';
import { useDraggable } from '@dnd-kit/core';

export function Draggable({ id, title }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

	const style = {
		transform: transform
			? `translate3d(${transform.x}px, ${transform.y}px, 0)`
			: undefined,
		marginBottom: '0.5rem',
		padding: '0.5rem 1rem',
		border: '1px solid #9c93e5',
		borderRadius: '8px',
		background: '#fff',
		color: '#3e3e3e',
		cursor: 'grab',
	};

	return (
		<div
			className='card'
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
		>
			{title}
		</div>
	);
}
