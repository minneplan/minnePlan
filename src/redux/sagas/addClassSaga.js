import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* addClassSaga(action) {
  console.log('Hit the addClassSaga', action);
  try {
    // Attempt to get class
    const response = yield axios.post('/api/add-new-class', action.payload);
    console.log(response);
  } catch (error) {
    console.log('Couldn\'t add class', error);
  }
}

function* addClass() {
  yield takeLatest('ADD_CLASS', addClassSaga);
}

export default addClass;