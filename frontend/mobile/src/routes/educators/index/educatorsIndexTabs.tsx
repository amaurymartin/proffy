import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import EducatorsIndex from '../../../pages/educators/index'
import EducatorsIndexFavorites from '../../../pages/educators/index/favorites'

const { Navigator, Screen } = createBottomTabNavigator()

function EducatorsIndexTabs(): JSX.Element {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="EducatorsIndex" component={EducatorsIndex} />
      <Screen
        name="EducatorsIndexFavorites"
        component={EducatorsIndexFavorites}
      />
    </Navigator>
  )
}

export default EducatorsIndexTabs
