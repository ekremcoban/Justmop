import { UPDATE_CARDS } from './actionTypes';

export const updateCards = (cards) => {
    return {
        type: UPDATE_CARDS,
        cards,
    };
};
