/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *     Ciclo de Vida dos Componentes - Estrutura Básica
 * Author: Glaucia Lemos
 * Date: 19/09/2016
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
        this.setState({ val: this.state.val + 1 })
    }

    componentWillMount() {
        this.setState({ m: 2 })
    }
    
    /**
     * O método render() no React é responsável por pegar as informações e renderizar na tela.
     */
    render() {
        console.log('renderizando.....')
        return <button onClick={this.update}>{ this.state.val * this.state.m }</button>
    }

    /**
     * O método 'componentDidMount()' é chamado uma vez só, só na parte do cliente, depois da renderização.
     */
    componentDidMount() {
        this.increment = setInterval(this.update, 500);
    }

    /**
     * O método 'componentWillUnmount()' é chamado quando desejamos desmontar um determinado componente.
     */
    componentWillUnmount() {
        clearInterval(this.increment);
    }
}

class Wrapper extends React.Component {
    constructor() {
        super();
    }
    
    /* Método para poder montar o Componente */
    mount() {
        ReactDOM.render(<App />, document.getElementById('a'))
    }

    /* Método para poder desmontar o Componente */
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Montar</button>
                <button onClick={this.unmount.bind(this)}>Desmontar</button>
                <div id="a"></div>
            </div>
        );
    }
}

export default Wrapper;