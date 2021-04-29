import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import usersReducer from "../components/user/reducer/reducer";
import controlDataUsersEpic from '../components/user/reducer/epics'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users']
}

const rootEpic = combineEpics(controlDataUsersEpic);
const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({
    users: usersReducer
});

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic as any);

export default store;