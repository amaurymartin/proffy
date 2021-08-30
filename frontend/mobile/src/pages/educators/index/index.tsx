import React from 'react'

import { ScrollView, View } from 'react-native'

import Header from '../../../components/header'
import Educator from '../../../components/educator'

import styles from './styles'

export default function EducatorsIndex(): JSX.Element {
  return (
    <View style={styles.container}>
      <Header title="Educators" />

      <ScrollView
        style={styles.educators}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <Educator />
        <Educator />
        <Educator />
        <Educator />
        <Educator />
      </ScrollView>
    </View>
  )
}
