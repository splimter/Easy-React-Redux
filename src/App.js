import React, {Component} from 'react';
import './App.css';

import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';

import {reducerName} from './reducers/reducerName';
import {reducerAge} from './reducers/reducerAge';

import Getter from './components/Getter';
import Displayer from './components/Displayer';


const allReducers = combineReducers({
    rName: reducerName,
    rAge: reducerAge
});

//The Store
const store = createStore(allReducers);

store.subscribe(()=>{
    console.log("Name updated!", store.getState());
});

class App extends Component {
    render() {
        return (
            //The app state provider
            <Provider store={store}>
                <Getter />
                <Displayer />
            </Provider>
        );
    }
}

export default App;
