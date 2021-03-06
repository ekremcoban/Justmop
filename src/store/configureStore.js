import { createStore, combineReducers } from 'redux';
import cardsReducer from './reducers/cards';

const rootReducer = combineReducers({
    cards: cardsReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;