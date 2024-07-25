import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// import WhoIsGoing from '../Screens/WhoIsGoing';
import manage from '../(tabs)/manage'

const Stack = createStackNavigator();

export default function HomeScreenStackNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Manage' component={manage} />
        {/* <Stack.Screen name='WhoIsGoing' component={WhoIsGoing} /> */}
    </Stack.Navigator>
  )
}