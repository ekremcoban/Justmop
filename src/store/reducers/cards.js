import { UPDATE_CARDS, ALL_CARDS } from '../actions/actionTypes';

const initialState = {
    cards: [],
    allCards: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CARDS:
            return {
                ...state,
                cards: action.cards
            };
        case ALL_CARDS:
            return {
                ...state,
                allCards: action.allCards,
            }
        default:
            return state;
    }
};

export default reducer;