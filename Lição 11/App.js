/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *     Ciclo de Vida dos Componentes - Estrutura Básica
 * Author: Glaucia Lemos
 * Date: 19/09/2016
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = { aumentando: false }
    }
    
    update() {
        ReactDOM.render(
            <App val={this.props.val+1} />,
            document.getElementById('app')
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ aumentando: nextProps.val > this.props.val })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }

    render() {
        console.log(this.state.aumentando)
        return (<button onClick={this.update}>{this.props.val}</button>)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
    }
}

App.defaultProps = { val: 0 }

export default App