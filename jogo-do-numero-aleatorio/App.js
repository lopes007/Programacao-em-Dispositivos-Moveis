import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: '',
      resultado: ''
    };
    
    this.onChangeNumber1 = this.onChangeNumber1.bind(this);
    this.calcular = this.calcular.bind(this);
  }

  onChangeNumber1(valor){
    this.setState({
      numero1: valor
    })
  } 

  calcular(){
    sortear = Math.floor(Math.random() * 10)
    this.setState({resultado: sortear})
   }

  render(){

    let img = 'https://www.einerd.com.br/wp-content/uploads/2019/10/Charada-capa.jpg';
    


    return(
      <View>
        <Text style={{color: 'Black', fontSize: 30, alignSelf: 'center', marginTop:35}}>
          Jogo do Nº Aleatório
        </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 250, height: 177, marginTop:30, alignSelf: 'center', marginBottom:5}}
        />

        <Text style={{color: 'Black', fontSize: 20, alignSelf: 'center', marginBottom:30, marginTop:30}}>
          Pense em um número de 0 a 10
        </Text>        

        <Button color='green' title="Descobrir" onPress={(this.calcular)} />

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