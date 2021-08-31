import React, { useState } from 'react'

import { ScrollView, Text, TextInput, View } from 'react-native'

import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'

import Header from '../../../components/header'
import Educator from '../../../components/educator'

import styles from './styles'

export default function EducatorsIndex(): JSX.Element {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Header
        title="Educators"
        icon={
          <BorderlessButton
            onPress={() => setIsFiltersVisible(!isFiltersVisible)}
          >
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.search}>
            <Text style={styles.label}>Subject</Text>
            <TextInput
              style={styles.input}
              placeholder="Select your subject"
              placeholderTextColor="#C1BCCC"
            />

            <View style={styles.schedule}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Week Day</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Select the best day"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Select the best time"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
            </View>

            <RectButton style={styles.button} onPress={() => undefined}>
              <Text style={styles.buttonText}>Search</Text>
            </RectButton>
          </View>
        )}
      </Header>

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
