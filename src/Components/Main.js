import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {Header, Container, Title, Icon, Left, Right} from 'native-base';
import { Actions } from 'react-native-router-flux'; // New code
import Deck from './Deck'

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class Main extends Component {

  renderCard = (item) => {
  <Card
    title={item.text}
    image={{ uri: item.uri }}
  >
  <Text style = {{marginBottom: 10 }}>Hello World!</Text>
  <Button
    icon={{ name: 'code'}}
    backgroundColor='#03A9F4'
    title="View Now"
  />
  
  </Card>
  }


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

  
    <View style={styles.container}>
        <Deck 
        data={DATA}
        renderCard={this.renderCard}
        />
    </View>



    </Container>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Main;