import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* archivedSaga(action) {
  try {
    // Attempt to get classes
    const response = yield axios.get(`/api/classes/history/${action.payload.season}/${action.payload.year}`);
    const setArchived = { type: 'SET_ARCHIVED', payload: response.data };
    yield put(setArchived);
  } catch (error) {
  }
}

function* archived() {
  yield takeLatest('GET_ARCHIVED', archivedSaga);
}

export default archived;
