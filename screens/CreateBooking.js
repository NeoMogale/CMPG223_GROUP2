import React,{useState} from "react";
import {View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Button from "../components/Button";
import TrainSchedule from "../modals/TrainSchedule";
import addBooking from "../functions/addBooking";
import DateTimePicker from '@react-native-community/datetimepicker';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const CreateBooking = ()=>{

    //      {id:'1', date:'20 Nov', dest:'Johannesburg', platform:'3', train:'1M23', status:'Paid', time:'13:00',  travellers:1, from:'Pretoria', ticketNo:'23115',actualTime:10838388288},


    const [date, setDate] = useState(null)
    const [travelers, setTravelers] = useState(new Date(1598051730000))
    const [time, setTime] = useState(null)
    const [from, setFrom] = useState(null)
    const [dest, setDestination] = useState(null)
    //const [depart, setDeparture] = useState(null)
    const [platform, setPlatform] = useState(null)
    const [train, setTrain] = useState(null) 

    const [isPickerShow, setIsPickerShow] = useState(false) 
    const [isVisible, setIsVisible] = useState(false) 
    const [mode, setMode] = useState('date');

    const showPicker = () => {
        if(isPickerShow)
            return
        setIsPickerShow(true);
    };

    const handleChange = ()=>{

    }

    const makeBooking =async ()=>{

        if(date === null || travellers === null || time ===null){
            alert("All field are required to make a booking")
            return 
        }

        await addBooking(date, 
            dest, 
            platform, 
            train,  
            travelers, 
            from, 
            date.getTime())

    }
    //157eaf   placeholder color
    return(
        <View style={{flex:1, backgroundColor:'#ffffff', flexDirection:'column', alignItems:'center',justifyContent:'space-between', padding:45}}>

        <TouchableWithoutFeedback onPress={()=>setIsVisible(true)}>
            <View style={{borderColor:'#16abd5', width:.66*width, height:45, borderWidth:1, borderRadius:20, alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:0.043*width}}>View Train Schedule</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={{margin:20, width, paddingLeft:20}}>
            <View>
            {/* <TextInput
                style={styles.textInput}
                value={date}
                onChangeText={val=>setDate(val)}
                placeholder="Travelling date"
            /> */}
            {/* <DatePicker
                style={{
                    backgroundColor:'#16abd5',
                    width:0.65*width,
                    height:41,
                    padding:0,
                    borderRadius:15,
                    color:'#ffffff',
                    margin:7,
                    fontSize:17,
                    paddingLeft:7, 
                }}
                
                date={date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2016"
                maxDate="01-01-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                    //display: 'none',
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                    },
                    dateInput: {
                    marginLeft: 36,
                    },

                }}
                onDateChange={(date) => {
                    setDate(date);
                }}
        /> */}
       
      
   
            <TouchableOpacity style={styles.textInput} onPress={showPicker}>
                {
                    date !== null ? <Text style={styles.text}>{date.toUTCString()}</Text>:<Text style={styles.placeholder}>Select a traveling date</Text>
                }
            </TouchableOpacity>

            <TextInput
                style={styles.textInput}
                value={travelers}
                onChangeText={val=>setTravelers(val)}
                placeholder="Number of travelers"
            />

            {/* <TextInput
                style={styles.textInput}
                value={time}
                onChangeText={val=>setTime(val)}
                placeholder="Time (view schedule)"
            /> */}

            <View style={styles.textInput} onPress={showPicker}>
                {
                    time !== null ? <Text style={styles.text}>{time}</Text>:<Text style={styles.placeholder}>Time (view schedule)</Text>
                }
             </View>

            {/* <TextInput
                style={styles.textInput}
                value={dest}
                onChangeText={val=>setDestination(val)}
                placeholder="Destination (view schedule)"
            /> */}

             <View style={styles.textInput}>
                {
                    from !== null ? <Text style={styles.text}>{from}</Text>:<Text style={styles.placeholder}>Departure (view schedule)</Text>
                }
             </View>

              <View style={styles.textInput} >
                {
                    dest !== null ? <Text style={styles.text}>{dest}</Text>:<Text style={styles.placeholder}>Destination (view schedule)</Text>
                }
             </View>


            {/* <TextInput
                style={styles.textInput}
                value={platform}
                onChangeText={val=>setPlatform(val)}
                placeholder="Platform (view schedule)"
            /> */}

            <View style={styles.textInput} >
                {
                    platform !== null ? <Text style={styles.text}>{platform}</Text>:<Text style={styles.placeholder}>Platform (view schedule)</Text>
                }
            </View>

            {/* <TextInput
                style={styles.textInput}
                value={train}
                onChangeText={val=>setTrain(val)}
                placeholder="Train (view schedule)"
            />    */}
            <View style={styles.textInput}>
                {
                    train !== null ? <Text style={styles.text}>{train}</Text>:<Text style={styles.placeholder}>Train (view schedule)</Text>
                }
            </View>
            </View>   
        </View>
        <TrainSchedule isVisible={isVisible} setIsVisible={setIsVisible} setTime={setTime} setDestination={setDestination} setPlatform={setPlatform} setTrain={setTrain} setFrom={setFrom}/>
        <Button name='Book' handlePress={makeBooking}/>
           
    </View>
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

export default CreateBooking