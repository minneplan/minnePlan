import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* addClassSaga(action) {
  try {
    // Attempt to add class to DB
    yield axios.post('/api/classes', action.payload);
  } catch (error) {
    console.log('Couldn\'t add class', error);
  }
}

function* addClass() {
  yield takeLatest('ADD_CLASS', addClassSaga);
}

export default addClass;
