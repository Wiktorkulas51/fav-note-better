import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import notesApp from "../reducers/index";

const store = createStore(notesApp, applyMiddleware(thunk));

export default store;
