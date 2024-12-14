'use client';

import { useDroppable } from '@dnd-kit/core';
import { Draggable } from './Draggable';

export default function Column({ id, title, documents }) {
	const { setNodeRef } = useDroppable({ id });

	return (
		<div
			ref={setNodeRef}
			style={{
				flex: 1,
				padding: '1rem',
				border: '1px solid #ccc',
				borderRadius: '4px',
			}}
		>
			<h3>{title}</h3>
			{documents.map(doc => (
				<Draggable key={doc.id} id={doc.id} title={doc.title} />
			))}
		</div>
	);
}
