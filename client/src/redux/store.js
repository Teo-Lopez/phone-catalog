import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  { phones: [], ready: false },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
