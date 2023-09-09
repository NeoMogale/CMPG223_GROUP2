import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../screens/Register';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/HomeScreen';
import CreateBooking from '../screens/CreateBooking';
import AllBookings from '../screens/AllBookings';
import TransactionHistory from '../screens/TransactionHistory';
import MakePayment from '../screens/MakePayment';
import MyTickets from '../screens/MyTickets';

//Admin screens
import AdminHome from '../screens/AdminHome.js'
import AdminAllBookings from '../screens/AdminAllBookings';
import AdminTransHistory from '../screens/AdminTransHistory';
import TrainSchedule from '../screens/AdminTrainSchedule';
import UserManagement from '../screens/UserManagement';

import { useSelector } from 'react-redux';
const Stack = createStackNavigator()

const AuthStack = ()=>{
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='Forgot password' component={ForgotPassword}/>
            {/* <Stack.Screen name='Support' component={SupportScreen}/> */}
        </Stack.Navigator>
    )
}

const HomeStack = ()=>{
    const accountDetails = useSelector(state=>state.accountState)
    return(

        <Stack.Navigator 
            initialRouteName='Home' 
            screenOptions={{
                headerStyle:{
                    backgroundColor:'#16abd5',
                    height:100
                },
                headerTintColor:'#ffffff'

            }}>
            <Stack.Screen options={{headerShown:false}} name='Home' component={accountDetails.role === 'Normal' ? Home:AdminHome}/>
            <Stack.Screen name='Make booking' component={CreateBooking}/>
            <Stack.Screen  name='All bookings' component={AllBookings}/>
            <Stack.Screen name='Transaction history' component={TransactionHistory}/>
            <Stack.Screen name='Make payment' component={MakePayment}/>
            <Stack.Screen name='My tickets' component={MyTickets}/>
            <Stack.Screen options={{headerShown:false}} name='Admin home' component={AdminHome}/>
            <Stack.Screen name='Admin transaction history' component={AdminTransHistory}/>
            <Stack.Screen  name='Admin all bookings' component={AdminAllBookings}/>
            <Stack.Screen name='Train schedule' component={TrainSchedule}/>
            <Stack.Screen  name='User management' component={UserManagement}/>
        </Stack.Navigator>
    )
}

export {AuthStack, HomeStack}