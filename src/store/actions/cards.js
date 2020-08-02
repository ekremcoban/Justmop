import { UPDATE_CARDS, ALL_CARDS } from './actionTypes';

export const updateCards = (cards) => {
    return {
        type: UPDATE_CARDS,
        cards,
    };
};

export const saveAllCards = (allCards) => {
    return {
        type: ALL_CARDS,
        allCards,
    }
}
