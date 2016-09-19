/**
 * Arquivo: app.js
 * Description: arquivo responsável por renderizar os componentes. 
 *     Ciclo de Vida dos Componentes - Estrutura Básica
 * Author: Glaucia Lemos
 * Date: 19/09/2016
 */

import React from 'react';

let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {val: 0}
  }

  update() {
    this.setState({val: this.state.val + 1})
  }

  componentWillMount(){
    console.log('Irá Montar!')
  }
  
  render() {
    return <InnerComponent
      update={this.update}
      {...this.state}
      {...this.props} />
  }

  componentDidMount() {
    console.log('Montado!')
  }
}

const Button = (props) =>   <button
                             onClick={ props.update }>
                             { props.txt } - { props.val } 
                            </button>

const Label = (props) =>    <label
                             onMouseMove={ props.update }>
                             { props.txt } - { props.val } 
                            </label>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component {
    render() {
        return (
            <div>
                <ButtonMixed txt="Button" />
                <LabelMixed txt="Label"/>   
            </div>
        );
    }
}

export default App;