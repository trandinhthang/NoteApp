import React, { useState, useEffect} from 'react'
import {Text, View, TouchableOpacity, StyleSheet,TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MateIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Async = () =>{
    const[name,setName] = useState();

    const save = async() => {
        try{
            await AsyncStorage.setItem("Myname", name);
        } catch(error){
            alert(error);
        }
    };

    const load = async() =>{
        try{
            let name = await AsyncStorage.getItem("Myname");
            if(name !== null){
                setName(name);
            }
        } catch(error){
            alert(error)
        }
    };
    const remove = async () =>{
        try {
            await AsyncStorage.removeItem("Myname");
        } catch (error) {
            alert(error)
        } finally{
            setName("")
        }
    }

    useEffect(() => {
        load();
    }, []);

  return (
    <View>
        {(name !== null) ? <Text>{name}</Text> : null}
        
        <TextInput style={Styles.textInput}
            onChangeText= { (text) => setName(text)}
        />
        <TouchableOpacity style={{margin:50}} onPress={ () => save()}>
            <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => remove()}>
            <Text>Delete</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Async;

const Styles= StyleSheet.create({
    textInput:{
        borderRadius:2,
        borderWidth:1,
        borderColor:'red'
    }
})
