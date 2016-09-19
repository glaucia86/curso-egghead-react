/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *     Ciclo de Vida dos Componentes - Estrutura Básica
 * Author: Glaucia Lemos
 * Date: 19/09/2016
 */

import React, {Component} from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);      
    }

    update() {
        ReactDOM.render(
            <App val={ this.props.val + 1 } />,
            document.getElementById('app')
        ); 
    }
    
    render() {
        return (
            <button onClick={ this.update }>{this.props.val}</button>
        );
    }
}

App.defaultProps = { val: 0 }

export default App;