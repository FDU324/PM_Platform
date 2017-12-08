/**
 * Created by kevintestt on 2017/11/27.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}
