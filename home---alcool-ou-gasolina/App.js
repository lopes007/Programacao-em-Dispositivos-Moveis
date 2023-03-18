import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: ''
    };
    
    this.onChangeNumber1 = this.onChangeNumber1.bind(this);
    this.onChangeNumber2 = this.onChangeNumber2.bind(this);
    this.calcular = this.calcular.bind(this);
  }

  onChangeNumber1(valor){
    this.setState({
      numero1: valor
    })
  } 

  onChangeNumber2(valor){
    this.setState({
      numero2: valor
    })
  }

  calcular(){
  if ( (this.state.numero1 === '') || (this.state.numero2 === '')){
    alert('É obrigatório digitar os dois números')
     return;
   }

   res = this.state.numero1 / this.state.numero2
   if (res > 0.7)
    this.setState({resultado: 'Abasteça com gasolina'});
   else
    this.setState({resultado: 'Abasteça com etanol'});

  }

  render(){

    let img = 'https://media.ale.com.br/uploads/2021/08/como-funciona-a-bomba-de-combustivel-do-posto.jpg';
    


    return(
      <View>
        <Text style={{color: 'Black', fontSize: 30, alignSelf: 'center', marginTop:35}}>
          Álcool ou Gasolina?
        </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 200, height: 200, marginTop:30, alignSelf: 'center', marginBottom:30}}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço do Álcool"
          onChangeText={this.onChangeNumber1}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina"
          onChangeText={this.onChangeNumber2}
          keyboardType="numeric"
        />

        <Button color='green' title="Calcular" onPress={this.calcular} />

        <Text style={styles.texto}> {this.state.resultado} </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 20
  }
})

export default App;