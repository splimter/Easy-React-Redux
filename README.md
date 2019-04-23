# Easy-React-Redux
simple example about using React &amp;&amp; Redux

## Redux component && methods Used

* `<Provider />` is the higher-order component provided by React Redux that lets you bind Redux to React, need to be imported `import { Provider } from 'react-redux';`.

* `createStore(reducer, [preloadedState], [enhancer])` Creates a Redux store that holds the complete state tree of your app, there should only be a single store in your app, need to be imported `import { createStore } from 'redux';`.

* `dispatch(action)` Dispatches an action. This is the only way to trigger a state change.

* `getState()` Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.

* `subscribe(listener)` Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed.

`combineReducers(reducers)` it turns an object whose values are different reducing functions into a single reducing function , the resulting reducer calls every child reducer, and gathers their results into a single state object, need to be imported `import { combineReducers } from 'redux';`.

* `mapStateToProps()` specify exactly which slice of the state we want to provide to our component.

* `mapDispatchToProps()` specify exactly which slice of the Action we want to provide to our component.

* `connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])` Creates a higher-order component for making container components out of base React components, need to be imported `import {connect} from 'react-redux';`
