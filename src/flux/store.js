import { combineReducers } from "redux";
import { createStore } from "redux";

// inhouse
import {
    TROLL_COUNT
} from "./actions.js"

const trollCount = (state=0, action) => {
    if (action.type === TROLL_COUNT) {
        return action.execute(state);
    } else {
        return state;
    }
}

const reducers = combineReducers({
    trollCount
});

export default createStore(reducers);
