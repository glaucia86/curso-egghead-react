/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *     Básico sobre uso de 'States' em React
 * Author: Glaucia Lemos
 * Date: 15/09/2016
 */

import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            txt: 'Isso aqui é um exemplo de state em React',
            cat: 0
        }
    }

    /* Aqui estamos criando um método chamado 'update' para poder trabalharmos com o 'setState'.
        O 'setState te permite 'setar'/ criar um novo estado para aquele
        determinado elemento. */
        update(event) {
            this.setState({ txt: event.target.value })
        }
    
    render() {
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)} />
                <h1>{this.state.txt}</h1>
            </div>
        );
    }
}

export default App;
