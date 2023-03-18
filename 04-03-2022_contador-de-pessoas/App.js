import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: 'Gabriel R. Lopes',
      valor: 0
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  
  entrar(){
    var ok = this.state.valor + 1
    this.setState({
      valor: ok
    });
  }

  sair(){
    var ok = this.state.valor - 1
    if(this.state.valor>0)
    this.setState({
      valor: ok
    });
  }

  render(){
    return(
      <View style={{ marginTop: 50
       }}>


        <Button color='green' title="+" onPress={this.entrar} />
        <Button color='red' title="-" onPress={this.sair} />


        <Text style={{fontSize: 20, color: 'black', textAlign: 'center', marginTop: 10 }}>
          {this.state.nome}
        </Text>

        <Text style={{fontSize: 20, color: 'black', textAlign: 'center', marginTop: 10 }}>
          {this.state.valor}
        </Text>

      </View>
      
    )
  }
 
}

export default App;