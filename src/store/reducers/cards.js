import { UPDATE_CARDS } from '../actions/actionsTypes';

const initialState = {
    cards: [999],
};

const reducer = (state = initialState, action) => {
    console.log("****", action.type);
    switch (action.type) {
        case UPDATE_CARDS:
            return {
                ...state,
            };
        default:
            return [];
    }
};

export default reducer;