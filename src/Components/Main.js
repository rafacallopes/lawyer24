import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Header, Container, Title, Button, Icon, Left, Right} from 'native-base';
import { Actions } from 'react-native-router-flux'; // New code

class Main extends Component {
render(){
  return (
    <Container>
      <Header style={{ backgroundColor: '#1e54aa'}}>
        <Left>
        <Icon onPress={() => Actions.pop()} name="ios-arrow-back" style={{color: 'white'}}/>
        </Left>
        <Right>
        <Icon onPress={() => Actions.add()} name="ios-add" style={{color: 'white'}}/>
        </Right>
          
      </Header>

  

    </Container>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Main;