/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *      aqui estamos criando diferente cenários de como podemos utilizar os retornos
 *      dos scripts com html na página
 * Author: Glaucia Lemos
 * Date: 15/09/2016
 */

import React from 'react';

/* 1º Exemplo - Jeito clássico */
/*
class App extends React.Component {
    render() {
        return (
            <h1>Olá Nerds!!!!!</h1>
        );
    }
} */

/* 2º Exemplo - Utilizando o método 'createElement' (passando 3 parâmetros) */

/*
class App extends React.Component {
    render() {
        return React.createElement('h1', null, 'Olá Folks!!!')
    }
} */

/* 3º Exemplo - Usando a variável (ES 2015) 'const' e arrow function */
const App = () => <h1>Olá Diferente!!!</h1>

export default App


/**
 * A diferença entre o exemplo 2 e 3 é que, o exemplo 2 (class Component) trabalhamos com 
 * mudanças de state.
 * Já o exemplo 3 é uma function Component que não tem state.
 */