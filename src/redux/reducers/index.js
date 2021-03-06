import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import instructor from './instructorReducer';
import instructorSchedule from './instructorScheduleReducer';
import classCount from './classCountReducer';
import session from './futureSessionReducer';
import setInstructor from './setInstructorReducer';
import futureSetClassReducer from './futureSetClassReducer';
import currentSessionReducer from './currentSessionReducer';
import year from './yearReducer';
import season from './seasonReducer';
import archived from './archivedReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  instructor,
  instructorSchedule,
  classCount,
  session,
  setInstructor,
  futureSetClassReducer,
  currentSessionReducer,
  year,
  season,
  archived,
});

export default rootReducer;
