import * as Actions from '../actions/actionType';

const initialState = {
    latestMessages: []
};




export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_LATEST_MESSAGE:
            return Object.assign({}, state, {
                latestMessages: [
                    ...state.latestMessages,
                    ...action.latestMessages,
                ],
            });
        default:
            return state;
    }
};
