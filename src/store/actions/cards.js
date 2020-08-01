import { UPDATE_CARDS } from './actionsTypes';

export const updateCards = (cards) => {
    return {
        type: UPDATE_CARDS,
        cards: cards,
    }
}