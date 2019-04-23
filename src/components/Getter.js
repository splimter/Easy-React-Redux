import React, { Component } from 'react';
import {connect} from 'react-redux';


class Getter extends Component {

    handleName(e){
        this.props.getName(e.target.value);
    };

    handleExp(e){
        this.props.getExp(e.target.value);
    };

    render() {
        return (
            <div>
                <h1>Getter</h1>
                Name: <input onChange={this.props.getName}/>
                Exp: <input onChange={this.props.getAge}/>
            </div>
        );
    }
}

//The Dispatcher
function mapDispatchToProps(dispatch) {
    return {
        getName: (e)=> dispatch({type: 'getName',payload: e.target.value}) ,
        getAge: (e)=> dispatch({type: 'getAge',payload: e.target.value}) ,
    }
}

export default connect('',mapDispatchToProps)(Getter);
