# Day 2

1. GUI Application Development History
2. Flux
3. createStore & Empty reducer
4. getState()
5. dispatch()
6. TODO example
7. import store and getState()
8. ADD_TODO action & dispatch()
9. Better way to connect React & Redux
10. combineReducers

# 1. GUI Application Development History

- Coding presentational & event-driven applications
- MVC as a solution
- Flux to metigate MVC shortcoming

# 2. Flux

Action => Store => State => View 

Redux is a Flux implementation

# 3. createStore & Empty reducer

```js
import { createStore } from 'redux';

const defaultState = {};

const reducer = (state = defaultState, action) => {
    return state;
};

const store = createStore(reducer);
```

# 4. getState()

```js
store.getState();
```
Try different defaultStates and call getState()

# 5. dispatch()

```js
const action = {};
store.dispatch(action);
```
Try different actions:
- SET_NAME
- ADD_DRINK

# 6. TODO example

- Components:
  - TodoList
  - Todo
  - App

# 7. import store and getState()

- `createStore`
- `defaultState = { todos:[] }`
- import store
- getState()

# 8. ADD_TODO action & dispatch()

- actions: ADD_TODO
- Button
- dispatch()

Why not rerendering?
- setState to rerender
- store.getState()

# 9. Better way to connect React & Redux

- react-redux
- Provider
- connect

# 10. combineReducers

- combineReducers
