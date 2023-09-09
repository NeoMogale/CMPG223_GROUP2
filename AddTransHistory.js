import React, { useState } from 'react'
import { View, Text, TouchableOpacity, 
        Dimensions, Modal, Platform,
        TouchableWithoutFeedback, FlatList,
        TextInput, StyleSheet
    } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const AddHistory = ({isVisible,setIsVisible})=>{

    const [date, setDate] = useState(null)
    const [travelers, setTravelers] = useState(null)
    const [amount, setAmount] = useState(null)
    const [payment, setPayment] = useState(null)

    return(
        <Modal visible={isVisible}  transparent={true} animationType='fade' style={{flex:1}}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.5)', flexDirection:'column', justifyContent:'flex-end'}}>
                <View style={{ backgroundColor:'#ffffff', height:.85*height, width, borderTopEndRadius:25, borderTopStartRadius:25, padding:15}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontSize:0.041*width, fontWeight:'bold', }}>Add transaction history</Text>
                        <TouchableWithoutFeedback onPress={()=>setIsVisible(false)}>
                            <Text style={{fontSize:0.035*width, fontWeight:'500'}}>Close</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={{marginTop:.09*height, height:'100%', alignItems:'center', }}>
            
            <View style={{marginBottom:.31*height}}>
                <TextInput
                    style={styles.textInput}
                    value={date}
                    onChangeText={val=>setDate(val)}
                    placeholder="Date"
                    placeholderTextColor={'lightgrey'}
                />

                <TextInput
                    style={styles.textInput}
                    value={travelers}
                    onChangeText={val=>setTravelers(val)}
                    placeholder="Travelers"
                    placeholderTextColor={'lightgrey'}
                />

                <TextInput
                style={styles.textInput}
                value={payment}
                onChangeText={(val)=>setPayment(val)}
                placeholderTextColor={'lightgrey'}
                placeholder="Payment type"
                />

                <TextInput
                style={styles.textInput}
                value={amount}
                onChangeText={(val)=>setAmount(val)}
                placeholderTextColor={'lightgrey'}
                placeholder="Amount"
                />
        </View>
        <Button name={"Add"} handlePress={()=>null} />
        </View>
                   
                </View>
            </View>  
        </Modal>
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor:'#16abd5',
        width:0.65*width,
        height:41,
        padding:0,
        borderRadius:15,
        color:'#ffffff',
        margin:7,
        fontSize:17,
        paddingLeft:7, 
        justifyContent:'center',
    },
    text:{
        color:'#000000',
        fontSize:17,
    },
    placeholder:{
        color:'lightgrey',
        fontSize:17,
    },
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
  });


export default AddHistory
