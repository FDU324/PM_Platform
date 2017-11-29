/**
 * Created by kevintestt on 2017/11/27.
 */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {

    //将Store和reducer绑定
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
