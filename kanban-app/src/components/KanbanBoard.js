'use client';

import { useSelector, useDispatch } from 'react-redux';
import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';
import { addDocument, updateDocumentStatus } from '../store/documentsSlice';
import Column from './Column';

const statuses = ['in-progress', 'under-review', 'completed'];

export default function KanbanBoard() {
	const documents = useSelector(state => state.documents);
	const dispatch = useDispatch();
	const [newDocTitle, setNewDocTitle] = useState('');

	const handleDragEnd = event => {
		const { active, over } = event;
		if (over && active.id !== over.id) {
			dispatch(updateDocumentStatus({ id: active.id, status: over.id }));
		}
	};

	const handleAddDocument = () => {
		if (newDocTitle.trim()) {
			dispatch(addDocument({ title: newDocTitle }));
			setNewDocTitle('');
		}
	};

	return (
		<div>
			<div
				className='newDocContainer'
				style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}
			>
				<input
					className='newDoc'
					type='text'
					value={newDocTitle}
					onChange={e => setNewDocTitle(e.target.value)}
					placeholder='Название нового документа'
				/>
				<button className='addDoc' onClick={handleAddDocument}>
					Добавить документ
				</button>
			</div>
			<DndContext onDragEnd={handleDragEnd}>
				<div style={{ display: 'flex', gap: '1rem' }}>
					{statuses.map(status => (
						<Column
							key={status}
							id={status}
							title={
								status === 'in-progress'
									? 'В работе'
									: status === 'under-review'
									? 'На проверке'
									: 'Завершено'
							}
							documents={documents.filter(doc => doc.status === status)}
						/>
					))}
				</div>
			</DndContext>
		</div>
	);
}
