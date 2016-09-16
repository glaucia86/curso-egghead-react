/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *     Acessando Propriedades 'Child'
 * Author: Glaucia Lemos
 * Date: 16/09/2016
 */

import React, {Component} from 'react';

/* Componente principal da aplicação */
class App extends React.Component {
    render() {
        return (
            <Button>Eu <Heart/> React!!!!</Button>
        );
    }
}

/* Componente de Botão - exemplo para ver como acessar uma determinada propriedade através do 'children' */
class Button extends React.Component {
    render() {
        return (
            <button>{this.props.children}</button>
        );
    }
}

/* Acesso ao bootstrap dentro de um outro Componente */
const Heart = () => <span className="glyphicon glyphicon-heart"></span>

export default App;
