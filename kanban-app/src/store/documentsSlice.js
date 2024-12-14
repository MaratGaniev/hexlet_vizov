import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialDocuments = [
	{ id: '1', title: 'Документ 1', status: 'in-progress' },
	{ id: '2', title: 'Документ 2', status: 'in-progress' },
	{ id: '3', title: 'Документ 3', status: 'under-review' },
];

const documentsSlice = createSlice({
	name: 'documents',
	initialState: initialDocuments,
	reducers: {
		addDocument: (state, action) => {
			state.push({
				id: nanoid(),
				title: action.payload.title,
				status: 'in-progress',
			});
		},
		updateDocumentStatus: (state, action) => {
			const { id, status } = action.payload;
			const document = state.find(doc => doc.id === id);
			if (document) {
				document.status = status;
			}
		},
	},
});

export const { addDocument, updateDocumentStatus } = documentsSlice.actions;
export default documentsSlice.reducer;
