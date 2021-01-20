import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import MateIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import CategoryList from '../components/CategoryList';
import Async from '../components/Async';
const CategoryScreen = ({navigation}) =>{
  return (
    <Container>
      <Header style={{backgroundColor:'#ff7700'}}>
        <Left>
          <MateIcon name="menu" size={30} color="white" onPress={() => {navigation.openDrawer()}} />
        </Left>
        <Body>
          <Text style={{fontSize:25, color:'white'}} >Category</Text>
        </Body>
      </Header>
      <CategoryList/>
    </Container>
  )
}
export default CategoryScreen;


