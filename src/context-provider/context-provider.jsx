import { Component } from 'react';
import { contextTypes } from 'mobx-connect';

class ContextProvider extends Component {
    
    getChildContext() {
        return this.props.context;
    }
    
    render() {
        return this.props.children;
    }
}

ContextProvider.childContextTypes = contextTypes;
export default ContextProvider;