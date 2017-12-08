/**
 * Created by kevintestt on 2017/11/27.
 */
import * as types from '../actions/actionType';

const initialState = {
    gameList: []
};

export default function gameListReducer(state = initialState, action) {

    switch (action.type) {
        case types.GAME_LIST:
            return Object.assign({}, state, {
                loading: true,
                gameList: action.gameList
            });
            break;
        default:
            return state;
    }

}