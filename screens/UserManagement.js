import React, { useState } from 'react'
import { View, Text, TouchableOpacity, 
        Dimensions, Modal, Platform,
        TouchableWithoutFeedback, FlatList
    } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../components/AddButton'
import UpdateSchedule from '../modals/ManageSchedule'
import AddSchedule from '../modals/AddSchedule'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const UserManagement = ()=>{
    const data = [
        {firstname:'Tendai', lastname:'Smith', id:'1'},
        {firstname:'Troy', lastname:'Johnsons', id:'2'},
        // {firstname:'Tumi', lastname:'', id:'3'},
        // {firstname:'Tendai', lastname:'Smith', id:'4'},
    ]

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const schedule = useSelector(state=>state.scheduleState.allSchedule)
    const [scheduleId, setScheduleId] = useState(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    
      const selectSchedule = (item)=>{
        setScheduleId(item.id)
        setIsVisible(true)
      }

    return(
           
                <View style={{ flex:1, backgroundColor:'#ffffff', height:.85*height, width, borderTopEndRadius:25, borderTopStartRadius:25, padding:15, justifyContent:'space-between'}}>
                   
                    <View style={{flex:1,marginTop:20, justifyContent:'space-between', paddingBottom:30}}>
                        <FlatList
                            data={schedule}
                            keyExtractor={item=>item.id}
                            style={{marginVertical:6, height:0.5*height}}
                            renderItem={({item})=>(
                                <TouchableOpacity onPress={()=>selectSchedule(item)} style={{ flexDirection:'row', justifyContent:'space-evenly', backgroundColor:'#16abd5', marginBottom:5, height:30, alignItems:'center', paddingHorizontal:5}}>
                                    <Text style={{fontSize:0.037*width, color:'#ffffff', marginRight:10}}>{item.time}</Text>
                                    <Text style={{fontSize:0.037*width, color:'#ffffff',flex:10}}>{item.depart}</Text>
                                    <Text style={{fontSize:0.037*width, color:'#ffffff',flex:10}}>{item.dest}</Text>
                                    <Text style={{fontSize:0.037*width, color:'#ffffff',flex:6, marginLeft:2}}>     {item.platform}</Text>
                                    <Text style={{fontSize:0.037*width, color:'#ffffff',flex:4, marginLeft:10}}>{item.train}</Text>
                                </TouchableOpacity>
                            )}
                        />
                  
                    </View>

                    <AddButton name={'Add user'} handlePress={()=>setIsOpen(true)}/>
                    {/* <UpdateSchedule isVisible={isVisible} setIsVisible={setIsVisible} scheduleId={scheduleId}/> */}
                </View>
    )
}


export default UserManagement



