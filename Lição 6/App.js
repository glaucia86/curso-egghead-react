/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *     Relacionamento entre os Componentes
 * Author: Glaucia Lemos
 * Date: 15/09/2016
 */

import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = { txt: '' }
        this.update = this.update.bind(this)
    }

    /* Aqui estamos criando um método chamado 'update' para poder trabalharmos com o 'setState'.
        O 'setState te permite 'setar'/ou criar um novo estado para aquele
        determinado elemento. */
        update(event) {
            this.setState({ txt: event.target.value })
        }
    
    render() {
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update}  />
                <Widget txt={this.state.txt} update={this.update}  />
                <Widget txt={this.state.txt} update={this.update}  />
                <Widget txt={this.state.txt} update={this.update}  />
            </div>
        );
    }
}

const Widget = (props) => {
    return (
            <div>
                <input type="text" onChange={props.update} />
                <h1>{props.txt}</h1>
            </div>
        );
}

export default App;
