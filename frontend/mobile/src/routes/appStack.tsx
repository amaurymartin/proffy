import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/home'
import EducatorsIndexTabs from './educators/index/educatorsIndexTabs'
import EducatorsNew from '../pages/educators/new'

const { Navigator, Screen } = createNativeStackNavigator()

function AppStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="EducatorsIndexTabs" component={EducatorsIndexTabs} />
        <Screen name="EducatorsNew" component={EducatorsNew} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
