/**
 * Created by kevintestt on 2017/11/27.
 */
import * as types from './actionType';

export function fetchGameList(index = 1) {
    return dispatch => {
        fetch('')
            .then(response => response.json()).then(responseData => {
            dispatch(receiverGameList(responseData));
        }).catch((error) => {
            console.log('error')
        }).done();
    }
}

function receiverGameList(data) {
    return {
        type: types.GAME_LIST,
        gameList: data.results
    }
}