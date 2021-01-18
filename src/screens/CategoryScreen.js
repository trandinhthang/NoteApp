import React from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import MateIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryScreen = ({navigation}) =>{
  return (
    <Container>
      <Header style={{backgroundColor:'orange'}}>
        <Left>
          <MateIcon name="menu" size={30} color="white" onPress={() => {navigation.openDrawer()}} />
        </Left>
        <Body>
          <Text style={{fontSize:25, color:'white'}} >Category</Text>
        </Body>
      </Header>
      <View style={{flex:1, margin:10}}>
        <View style={{backgroundColor:'#55a7fa',padding:10,borderRadius:10,marginBottom:10}}>
          <Text> Category</Text>
          <MateIcon name='delete' size={20} color='white'/>  
          <MateIcon name='update' size={20} color='white'/>  
        </View>
        <View style={{backgroundColor:'#55a7fa',padding:10,borderRadius:10}}>
          <Text> Category</Text>
          <MateIcon name='delete' size={20} color='white'/>  
          <MateIcon name='update' size={20} color='white'/>  
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor:'orange',width:50, height:50, borderRadius:30, justifyContent:'center', alignItems:'center'}} >
          <Text>+</Text>
      </TouchableOpacity>
      
    </Container>
  )
}
export default CategoryScreen;