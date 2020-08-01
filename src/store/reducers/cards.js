import { UPDATE_CARDS } from '../actions/actionTypes';

const initialState = {
    cards: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CARDS:
            return {
                ...state,
                cards: action.cards
            };
        default:
            return state;
    }
};

export default reducer;