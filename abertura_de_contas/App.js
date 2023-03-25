import React, { Component } from 'react';
import { View, TextInput, Button, Text, Switch } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',      
      escolaridade: '',
      exibirNome: '',
      exibirIdade: '',
      gener: 0,
      genero: [
        {id: 1, escolha: 'Masculino'},
        {id: 2, escolha: 'Feminino'},
      ],
      estudo: 0,
      escolaridade: [ 
      {id: 1, grau: 'Fundamental', preco: 35.90},
      {id: 2, grau: 'Ensino Médio', preco: 59},
      {id: 3, grau: 'Superior', preco: 37},
      ],
      valor: 0,
      status: false
    };
  }
  //Lógica que recebe valor - funções
  recebeNome = (inputValue) => {
    this.setState({ nome: inputValue });
  }

  recebeIdade = (inputValue) => {
    this.setState({ idade: inputValue });
  }
  
//Lógica que envia valor - funções
  enviar = () => {
    const { nome, idade } = this.state;
    // Envia os valores inseridos para o destino desejado
    console.log(nome, idade );
    this.setState({ exibirNome: nome, exibirIdade: idade });
  }

  render() {

    //Variáveis para picker
    let generoEscolhido = this.state.genero.map((valor, chave) => {
      return <Picker.Item key={chave} value={valor.id} label={valor.escolha} />
    })

    let grauEscolar = this.state.escolaridade.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.grau} />
    })

    return (
      <View>
        {/*Inputs*/}
        <TextInput
          placeholder="Digite um valor"
          value={this.state.nome}
          onChangeText={this.recebeNome}
        />

        <TextInput
          placeholder="Digite outro valor"
          value={this.state.idade}
          onChangeText={this.recebeIdade}
        />

        {/*Pickers que aparecerão na tela*/}
        <Picker selectedValue={this.state.gener+1}
        onValueChange={(itemValue, itemIndex) => this.setState({gener: itemIndex})}>
        
        {generoEscolhido}

        </Picker>

        <Picker
      selectedValue={this.state.estudo+1}
      onValueChange={ (itemValue, itemIndex) => this.setState({estudo: itemIndex}) } >
      {grauEscolar}
      </Picker>

      {/*Slider na tela*/}
      <Slider
      minimumValue={0}
      maximumValue={201}
      onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
      value={this.state.valor}
    />
    {/*Switch na tela*/}
    <Switch 
      value={this.state.status}
      onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
      />
        
        {/*Botão que envia valores*/}
        <Button title="Enviar" onPress={this.enviar} />

          {/*lógica para exibir*/} 
          <View style={{ flexDirection: 'column' }}>
            <Text>{this.state.exibirNome}</Text>
            <Text>{this.state.exibirIdade}</Text>
            <Text>{this.state.genero[this.state.gener].escolha}</Text>
            <Text>{this.state.escolaridade[this.state.estudo].grau}</Text>
            <Text>{this.state.valor.toFixed(0)}</Text>
            <Text>{(this.state.status) ? "Brasileiro" : "Estrangeiro"}</Text>
          </View>
        
      </View>
    );
  }
}

export default MyComponent;
