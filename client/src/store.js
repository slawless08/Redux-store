import { createStore } from 'redux';
import rootReducer from './reducer.js';

const store = createStore(rootReducer, undefined);

export default store