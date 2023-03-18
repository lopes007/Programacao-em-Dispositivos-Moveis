import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';


class App extends Component{
  render(){

    let nome= 'Gabriel Ribeiro Lopes';
    let img = 'https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/298050934_5019642311479136_803635816108186239_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGe2MPc79nsYw5txBDT1tySo1W98OUrcSqjVb3w5StxKr7tUz05tJ6Ku-YycCoEKSKntBh_EcV0c3pKFTjYwm7S&_nc_ohc=0WPL_SZGWwcAX-g9Cap&_nc_ht=scontent-gru2-1.xx&oh=00_AfCPY-bhdUVOlK0cJ9bjpMRMP0H2mvDF1ZJOMgmBUCtvYQ&oe=640001BC';


    return(
      <View>
        <Text style={{color: '#0066CC', fontSize: 30, alignSelf: 'center'}}>
          Meu Perfil:
        </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 200, height: 200, margin: 80, marginBottom:30}}
        />

          <Text style={{color: '#0066CC', fontSize: 30, fontWeight: 'bold'}}>
          Dados Pessoais:
        </Text> 
          <Text style={{color: '#000000', fontSize: 18, margin: 5}}>
          Gabriel Ribeiro Lopes | 19 Anos | Em um relacionamento sério
        </Text> 

          <Text style={{color: '#0066CC', fontSize: 30}}>
          Formação:
        </Text> 
          <Text style={{color: '#000000', fontSize: 18, margin: 5}}>
          Graduando em Análise e Desenvolvimento de Sistemas - Tecnólogo
        </Text> 

          <Text style={{color: '#0066CC', fontSize: 30}}>
          Experiência:
        </Text> 
         <Text style={{color: '#000000', fontSize: 18, marginLeft: 5, marginTop: 5}}>
          IMS Job Control Language;
        </Text> 
          <Text style={{color: '#000000', fontSize: 18, marginLeft:5}}>
          IMS Systems Programmer;
        </Text> 
          <Text style={{color: '#000000', fontSize: 18, marginLeft:5, marginBottom:5}}>
          IMS OSAM and VSAM Databases;
        </Text> 

          <Text style={{color: '#0066CC', fontSize: 30}}>
          Projetos:
        </Text> 
          <Text style={{color: '#000000', fontSize: 18, margin: 5}}>
          Todos os projetos estão disponíveis em repositórios do GitHub: https://github.com/lopes007
        </Text> 

      </View>
    )
  }
}


export default App;