import React from 'react'
import {
  Text,
  View
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NoteList from '../components/NoteList';
const NoteScreen = ({navigation}) =>{
  return (
    <Container>
      <Header style={{backgroundColor:'#ff7700'}}>
        <Left>
          <Ionicons name="menu" size={30} color="white" onPress={() => {navigation.openDrawer()}} />
        </Left>
        <Body>
          <Text style={{fontSize:25, color:'white'}} >Note</Text>
        </Body>
      </Header>
      <NoteList/>
    </Container>
  )
}
export default NoteScreen;