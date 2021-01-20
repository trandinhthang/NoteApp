import React, { Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet,TextInput, Modal} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MateIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class StatusList extends Component{
    arrBf=[] //array before
    id=0
    constructor(props){
        super(props);
        this.state = {
            text: '',
            itemS:[{id:1,data:'',day:''}],
            modalVisible:false,
        }
    }
  
    // save and show item
    saveLoadData = async() => {
        try{
            const year=new Date().getFullYear();
            const day=new Date().getDate();
            const month=new Date().getMonth()+1;
            
            this.arrBf.push({id:this.id, data:this.state.text, day:year+'/'+day+'/'+month});
            this.id++;
            //set item 
            await AsyncStorage.setItem("ListStatus", JSON.stringify(this.arrBf))
            //get item từ string về object(JSON.parse)
            this.setState({
                itemS: JSON.parse(await AsyncStorage.getItem("ListStatus"))
            })
        } catch(error){
            alert(error);
        }
    };
    //save after reload
    async componentDidMount(){
       this.setState({
            itemS: JSON.parse(await AsyncStorage.getItem("ListStatus"))
        })
        // this.arrBf=JSON.parse(await AsyncStorage.getItem("ListStatus")) //array after
    }
    //set modal
    setModalVisible = (visible) =>{
        this.setState( { modalVisible:visible})
    }

    render(){
        return (
            <View style={{height:'100%'}}>
                <View style={{height:'80%'}}>
                {this.state.itemS ? 
                    this.state.itemS.map( (item,index) =>
                    <View key={index} style={Styles.listItem}>
                        <Text style={{color:'white',fontSize:18}}>{item.data}</Text>
                        <Text style={{color:'white',fontSize:15}}>Ngày tạo: {item.day}</Text>
                        <View style={{position:'absolute',right:10}}>
                            <MateIcon name="update" size={25} color="white" />
                            <MateIcon name="delete" size={25} color="white" />
                        </View>        
                    </View>     
                    ) : <View style={{alignItems:'center',justifyContent:'center',height:'80%'}}>
                        <Text style={{fontSize:20, color:'gray'}}> Status Empty</Text>   
                    </View>
                } 
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                    >
                        <View style={{margin:10,marginTop:50,height:300,backgroundColor:'#a5d5fa'}}>
                            <View style={{  backgroundColor:'#0091ff',width:"100%",height:50,
                                        alignItems:'center', justifyContent:'center'}}
                            >
                                <Text style={{color:'white',fontSize:20}}>Add Status </Text>
                            </View>
                            <View style={{marginTop:15}}>
                                <Text  style={{color:'#0040ff',fontSize:16,padding:13,paddingBottom:1}}> Name </Text>
                                <TextInput 
                                    style={Styles.textInput}
                                    value={this.state.text} 
                                    onChangeText={ (text) => this.setState({text}) }/>               
                            </View>  
                            <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:20}}>
                                <TouchableOpacity style={{backgroundColor:'#0040ff',
                                    width:80, height:40,alignItems:'center',justifyContent:'center',borderRadius:8}} 
                                    onPress={this.saveLoadData}
                                >
                                    <Text style={{color:'white',fontSize:16}} >Add</Text>
                                </TouchableOpacity>
                                 <TouchableOpacity style={{backgroundColor:'red', marginLeft:5,marginRight:20,
                                    width:80, height:40,alignItems:'center',justifyContent:'center',borderRadius:8}} 
                                    onPress={ () => {this.setModalVisible(!this.state.modalVisible)}}
                                >
                                    <Text style={{color:'white',fontSize:16}} >Cancel</Text>
                                </TouchableOpacity>
                            </View>             
                        </View>             
                    </Modal>
                </View>
                <View style={{backgroundColor:'white',height:'10%'}}>
                    <MateIcon name="plus-circle" size={55} color="#00ba1f" 
                        onPress={ () => {this.setModalVisible(!this.state.modalVisible)}}  
                        style={Styles.insertButton}  
                />                
                </View>
            </View>
            
            
        )
    }
}

export default StatusList;

const Styles= StyleSheet.create({
    textInput:{
        marginTop:5,
        margin:20,
        backgroundColor:'white',
        borderRadius:8,
        borderWidth:1,
        borderColor:'#fccb6f'
    },
    insertButton:{
        position:'absolute',
        right:10
    },
    listItem:{
        margin:15,
        padding:10,
        paddingRight:40,
        backgroundColor:'#00ba1f',
        borderRadius:8
    }
})
