import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/home'

const { Navigator, Screen } = createNativeStackNavigator()

function AppStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
