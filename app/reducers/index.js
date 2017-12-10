/**
 * Created by kevintestt on 2017/11/27.
 */
import {combineReducers} from 'redux';
import gameListReducer from './gameListReducer';
import friendReducer from './friendReducer';


const rootReducer = combineReducers({
    gameListReducer,
    friendReducer,
});

export default rootReducer;