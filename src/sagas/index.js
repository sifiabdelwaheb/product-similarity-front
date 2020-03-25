import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import packages from './package';

import language from './language';
import users from './users';

const sagas = [...auth, ...packages, ...users, ...language];
function* rootSaga() {
  const globalSagasForks = sagas.map(saga => fork(saga));
  yield all([...globalSagasForks]);
}
export default rootSaga;