import React from 'react'
import {
  Text,
  View
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PriorityList from '../components/PriorityList'
const PriorityScreen = ({navigation}) =>{
  return (
    <Container>
      <Header style={{backgroundColor:'#029e1c'}}>
        <Left>
          <Ionicons name="menu" size={30} color="white" onPress={() => {navigation.openDrawer()}} />
        </Left>
        <Body>
          <Text style={{fontSize:25, color:'white'}} >Priority</Text>
        </Body>
      </Header>
      <PriorityList/>
    </Container>
  )
}
export default PriorityScreen;