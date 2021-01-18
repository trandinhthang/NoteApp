import React from 'react'
import {
  Text,
  View
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) =>{
  return (
    <Container>
      <Header style={{backgroundColor:'orange'}}>
        <Left>
           <Ionicons name="menu" size={30} color="white" onPress={() => {navigation.openDrawer()}} />
        </Left>
        <Body>
          <Text style={{fontSize:25, color:'white'}} >Home</Text>
        </Body>
      </Header>
      <View>
        <Text>TTTTT</Text>
      </View>
    </Container>
  )
}
export default HomeScreen;