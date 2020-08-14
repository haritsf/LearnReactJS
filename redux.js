const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
  name: "haritsf",
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addValue":
      return {
        ...state,
        value: state.value + 1000,
      };
    case "changeName":
      return {
        ...state,
        name: state.name + action.addName,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);
console.info(store.getState());

// Subscribing
store.subscribe(() => {
  console.log("store change: ", store.getState());
});

// Dispatching Action
store.dispatch({ type: "addValue" });
store.dispatch({ type: "changeName", addName: " kiww" });
console.info(store.getState());
