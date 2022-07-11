import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducer/root';
import rootSaga, { onLoadProduct } from "./saga/sagas";


const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;