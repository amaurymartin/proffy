import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'

import EducatorsIndex from '../../../pages/educators/index'
import EducatorsIndexFavorites from '../../../pages/educators/index/favorites'

const { Navigator, Screen } = createBottomTabNavigator()

function EducatorsIndexTabs(): JSX.Element {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={route.name === 'EducatorsIndex' ? 'ios-easel' : 'ios-heart'}
            color={focused ? '#8257E5' : color}
            size={size}
          />
        ),
        headerShown: false,
        activeBackgroundColor: '#EBEBF5',
        activeTintColor: '#32264D',
        inactiveBackgroundColor: '#FAFAFC',
        inactiveTintColor: '#C1BCCC',
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
      })}
    >
      <Screen
        name="EducatorsIndex"
        component={EducatorsIndex}
        options={{ tabBarLabel: 'All' }}
      />
      <Screen
        name="EducatorsIndexFavorites"
        component={EducatorsIndexFavorites}
        options={{ tabBarLabel: 'Favorites' }}
      />
    </Navigator>
  )
}

export default EducatorsIndexTabs
