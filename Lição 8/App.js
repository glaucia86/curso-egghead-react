/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *     Usando 'refs' para poder acessar os Componentes
 * Author: Glaucia Lemos
 * Date: 15/09/2016
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = { 
            vermelho: 0,
            verde: 0,
            azul: 0    
        }
        this.update = this.update.bind(this)
    }

    /* Aqui estamos criando um método chamado 'update' para poder trabalharmos com o 'setState'.
        O 'setState te permite 'setar'/ou criar um novo estado para aquele
        determinado elemento. */
        update(event) {
            this.setState({ 
                vermelho: ReactDOM.findDOMNode(this.refs.vermelho.refs.input).value,
                verde: ReactDOM.findDOMNode(this.refs.verde.refs.input).value,
                azul:ReactDOM.findDOMNode(this.refs.azul.refs.input).value    
             })
        }
    
    render() {
        return (
            <div>
                <Slider ref="vermelho" update={this.update}  />
                {this.state.vermelho}
                <br />
                <Slider ref="verde" update={this.update}  />
                {this.state.verde}
                <br />
                <Slider ref="azul" update={this.update}  />
                {this.state.azul}
                <br />
            </div>
        );
    }
}

/* Função Componente de estado */
class Slider extends React.Component {
    render() {
        return (
                <div>
                    <input ref="input" type="range"
                    min="0"
                    max="255"  
                    onChange={this.props.update} />
                </div>
        );
    }
}

export default App;
