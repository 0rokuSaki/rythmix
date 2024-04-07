import { legacy_createStore as createStore, compose, combineReducers } from "redux";

import { stationReducer } from "./reducers/station.reducer";
import { appReducer } from "./reducers/app.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  stationModule: stationReducer,
  appModule: appReducer,
});

export const store = createStore(rootReducer, composeEnhancers());

// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })
