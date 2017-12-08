/**
 * Created by kevintestt on 2017/11/27.
 */
import {combineReducers} from 'redux';
import gameListReducer from './gameListReducer';

const rootReducer = combineReducers({
    gameListReducer
});

export default rootReducer;