import React from 'react'
import {
  Text,
  View
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StatusList from '../components/StatusList'
const StatusScreen = ({navigation}) =>{
  return (
    <Container>
      <Header style={{backgroundColor:'#029e1c'}}>
        <Left>
          <Ionicons name="menu" size={30} color="white" onPress={() => {navigation.openDrawer()}} />
        </Left>
        <Body>
          <Text style={{fontSize:25, color:'white'}} >Status</Text>
        </Body>
      </Header>
      <StatusList/>
    </Container>
  )
}
export default StatusScreen;