import React, { Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet,TextInput, Modal} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MateIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class NoteList extends Component{
    arrBf=[] //array before
    id=0
    constructor(props){
        super(props);
        this.state = {
            text: '',
            itemNote:[],
            itemC:[],
            itemP:[],
            itemS:[],
            modalVisible:false,
            category:'',
            priority:'',
            status:'',
            datePlan:''
        }
    }
    // save and show item
    saveLoadData = async() => {
        try{
            const year=new Date().getFullYear();
            const day=new Date().getDate();
            const month=new Date().getMonth()+1;
            
            this.arrBf.push({id:this.id, data:this.state.text, day:year+'/'+day+'/'+month,
                            status:this.state.status,category:this.state.category,priority:this.state.priority,
                            datePlan:this.state.datePlan
            });
            this.id++;
            //set item 
            await AsyncStorage.setItem("Note", JSON.stringify(this.arrBf))
            //get item từ string về object(JSON.parse)
            this.setState({
                itemNote: JSON.parse(await AsyncStorage.getItem("Note"))
            })
        } catch(error){
            alert(error);
        }
    };
    // load status
    loadStatus = async() => {
        try{
            //get item từ string về object(JSON.parse)
            this.setState({
                itemC: JSON.parse(await AsyncStorage.getItem("ListCategory")),
                itemP: JSON.parse(await AsyncStorage.getItem("ListPriority")),
                itemS: JSON.parse(await AsyncStorage.getItem("ListStatus"))
            })
        } catch(error){
            alert(error);
        }
    };
    // save after reload
    async componentDidMount(){
       this.setState({
            itemC: JSON.parse(await AsyncStorage.getItem("ListCategory")), // item category
            itemP: JSON.parse(await AsyncStorage.getItem("ListPriority")), // item priority
            itemS: JSON.parse(await AsyncStorage.getItem("ListStatus")), // item status
            itemNote: JSON.parse(await AsyncStorage.getItem("Note")) //item note
        })
        // this.arrAf=JSON.parse(await AsyncStorage.getItem("Note")) //array after
    }
    //set modal
    setModalVisible = (visible) =>{
        this.setState( { modalVisible:visible})
    }
    render(){
        return (
            <View style={{height:'100%'}}>
                <View style={{height:'80%'}}>
                {console.log(this.state.itemNote)}
                   {this.state.itemNote ? 
                        this.state.itemNote.map( (item,index) =>
                        <View key={index} style={Styles.listItem}>
                            <Text style={{color:'white',fontSize:18}}>{item.data}</Text>
                            <Text style={{color:'white',fontSize:15}}>{item.category}</Text>
                            <Text style={{color:'white',fontSize:15}}>{item.priority}</Text>
                            <Text style={{color:'white',fontSize:15}}>{item.status}</Text>
                            <Text style={{color:'white',fontSize:15}}>{item.day}</Text>
                            <Text style={{color:'white',fontSize:15}}>{item.datePlan}</Text>
                            <View style={{position:'absolute',right:10}}>
                                <MateIcon name="update" size={25} color="white" />
                                <MateIcon name="delete" size={25} color="white" />
                            </View>        
                        </View>     
                        ) : <View style={{alignItems:'center',justifyContent:'center',height:'80%'}}>
                            <Text style={{fontSize:20, color:'gray'}}> Note Empty</Text>   
                        </View>
                    } 
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                    >
                        <View style={{margin:10,marginTop:50,height:500,backgroundColor:'#a5d5fa'}}>                        
                            <View style={{  backgroundColor:'#0091ff',width:"100%",height:50,
                                        alignItems:'center', justifyContent:'center'}}
                            >
                                <Text style={{color:'white',fontSize:20}}>Add Note </Text>
                            </View>
                            <View  style={{flexDirection:'row',justifyContent:'flex-end',marginRight:20}}>
                                <MateIcon color="#0040ff" name="reload" size={30} onPress={this.loadStatus} />
                            </View>
                            <View>
                                <Text  style={{color:'#0040ff',fontSize:16,padding:13,paddingTop:0,paddingBottom:1}}> Name </Text>
                                <TextInput 
                                    style={Styles.textInput}
                                    value={this.state.text} 
                                    onChangeText={ (text) => this.setState({text}) }/>               
                            </View>
                            {/* picker category */}
                            <Picker selectedValue={this.state.category}
                                style={{height: 50, width: 330,marginLeft:10}}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({category: itemValue})}
                            >
                                <Picker.Item label="Chọn category"/>
                                {this.state.itemC ? 
                                    this.state.itemC.map( (item,index) =>
                                        <Picker.Item key={index} label={item.data} value={item.data} />
                                    ) : null
                                } 
                            </Picker>
                            {/* picker priority */}
                            <Picker selectedValue={this.state.priority}
                                style={{height: 50, width: 330,marginLeft:10}}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({priority: itemValue})}
                            >
                                <Picker.Item label="Chọn priority"/>
                                {this.state.itemP ? 
                                    this.state.itemP.map( (item,index) =>
                                        <Picker.Item key={index} label={item.data} value={item.data} />
                                    ) : null
                                } 
                            </Picker>
                            {/* picker status */}
                            <Picker selectedValue={this.state.status}
                                style={{height: 50, width: 330,marginLeft:10}}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({status: itemValue})}
                            >
                                <Picker.Item label="Chọn status"/>
                                {this.state.itemS ? 
                                    this.state.itemS.map( (item,index) =>
                                        <Picker.Item key={index} label={item.data} value={item.data} />
                                    ) : null
                                } 
                            </Picker>
                            <View >
                                <Text  style={{color:'#0040ff',fontSize:16,padding:13,paddingTop:0,paddingBottom:1}}> Plan date </Text>
                                <TextInput 
                                    style={Styles.textInput}
                                    value={this.state.datePlan} 
                                    onChangeText={ (datePlan) => this.setState({datePlan}) }/>
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
                    <MateIcon name="plus-circle" size={55} color="#fc973f" 
                        onPress={ () => {this.setModalVisible(!this.state.modalVisible)}}  
                        style={Styles.insertButton}  
                />                
                </View>
            </View>          
        )
    }
}

export default NoteList;

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
        backgroundColor:'#fc973f',
        borderRadius:8
    }
})
