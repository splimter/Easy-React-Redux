import React, { Component } from 'react';
import {connect} from 'react-redux';

class Displayer extends Component {
    render() {
        return (
            <div>
                <h1>Result</h1>
                <h3>{this.props.name}</h3>
                <h3>{this.props.age}</h3>
            </div>
        );
    }
}

//Map app state to component props
function mapStateToProps(state) {
    return {
        name: state.rName.name,
        age: state.rAge.age,
    }
}


export default connect(mapStateToProps,'')(Displayer);
