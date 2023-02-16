import {  applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { carsReducer } from './reducers/carsReducer';
import { alertsReducer } from './actions/alertsReducer';
import { bookingsReducer } from './reducers/bookingsReducer';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsDenylist, actionsCreators and other options
});

const rootReducer = combineReducers({
    carsReducer,
    alertsReducer,
    bookingsReducer
})


const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store