/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *     Ciclo de Vida dos Componentes - Estrutura Básica
 * Author: Glaucia Lemos
 * Date: 16/09/2016
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();

        this.state = { val: 0 };
        this.update = this.update.bind(this);
    }

    /* Método para poder atualizar o estado de um determinado valor */
    update() {
        this.setState({ val: this.state.val +1 })
    }
    
    render() {
        console.log('renderizando.....')
        return (
            <button onClick={this.update}>{this.state.val}</button>
        );
    }
}

export default App;