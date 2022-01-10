import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthService } from '../../services/AuthService';
import {
   AUTH_USER,
   AUTH_USER_FAILED,
   AUTH_USER_SUCCEEDED,
   USER_LOGOUT,
   USER_LOGOUT_FAILED,
   USER_LOGOUT_SUCCEEDED
} from '../../common/ActionTypes';

function* fetchUser(action: any):any {
   let authService = new AuthService()
    try {
       const data = yield call(authService.getToken, action.payload);

       yield put({type: AUTH_USER_SUCCEEDED, payload : {data: data } });
    } catch (e:any) {
       yield put({type: AUTH_USER_FAILED, message: e.message});
    }
 }

 function* logOutUser(action: any):any {
    try {
       yield put({type: USER_LOGOUT_SUCCEEDED, payload : { } });
    } catch (e:any) {
       yield put({type: USER_LOGOUT_FAILED, message: e.message});
    }
 }

 export default function* authSaga() {
   yield takeLatest(AUTH_USER, fetchUser)
   yield takeLatest(USER_LOGOUT, logOutUser)
 }
 