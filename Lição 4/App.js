/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *      aqui estamos criando diferente cenários de como podemos utilizar os retornos
 *      dos scripts com html na página
 * Author: Glaucia Lemos
 * Date: 15/09/2016
 */

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        /* as variáveis devem ser declaradas abaixo do método render() */
        let txt = this.props.txt
        return (
            <p>{txt}</p>
        );
    }
}

/* Aqui estamos definindo os tipos que serão das 'props' criadas */
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

/* Aqui estamos definindo um 'prop' default. Porém o que prevalecerá é declaração no render() */
App.defaultProps = {
    txt: 'Isso aqui é um texto default'
}

ReactDOM.render(
    <App cat={5} txt="Isso aqui são props do valor!" />,
    document.getElementById('app')
);
