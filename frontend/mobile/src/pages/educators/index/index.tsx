import React, { useCallback, useEffect, useState } from 'react'

import { ScrollView, Text, TextInput, View } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

import Header from '../../../components/header'
import Educator from '../../../components/educator'

import Class from '../../../@types/props/class'
import EducatorProps from '../../../@types/props/educator'

import api from '../../../services/api'

import styles from './styles'

type ClassIndexResponse = {
  classes: Class[]
}

export default function EducatorsIndex(): JSX.Element {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')
  const [classes, setClasses] = useState<Class[]>([])
  const [favorites, setFavorites] = useState<EducatorProps[]>([])

  useEffect(() => {
    getClasses()
    getFavorites()
  }, [])

  useFocusEffect(
    useCallback(() => {
      getFavorites()
    }, [])
  )

  async function getClasses() {
    await api
      .get<ClassIndexResponse>('classes')
      .then((response) => {
        setClasses(response.data.classes)
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error on searching classes. Try again')
      })
  }

  async function getFavorites() {
    await AsyncStorage.getItem('favorites')
      .then((response) => {
        if (response) setFavorites(JSON.parse(response) || [])
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error on getting favorites')
      })
  }

  // TODO: improve this method
  function formatTime(unformatedTime: string) {
    setTime(unformatedTime.toUpperCase())
  }

  function mountQueryParams() {
    let queryParams = {}

    if (subject !== '') queryParams = { subject }
    if (weekDay !== '') queryParams = Object.assign(queryParams, { weekDay })
    if (time !== '') queryParams = Object.assign(queryParams, { time })

    return { params: queryParams }
  }

  async function searchClasses() {
    setIsFiltersVisible(!isFiltersVisible)

    await api
      .get<ClassIndexResponse>('classes', mountQueryParams())
      .then((response) => {
        setClasses(response.data.classes)
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error on searching classes. Try again')
      })
  }

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
              onChangeText={(text) => setSubject(String(text).toUpperCase())}
            />

            <View style={styles.schedule}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Week Day</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Select the best day"
                  placeholderTextColor="#C1BCCC"
                  onChangeText={(text) =>
                    setWeekDay(String(text).toUpperCase())
                  }
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Select the best time"
                  placeholderTextColor="#C1BCCC"
                  defaultValue=""
                  value={time}
                  onChangeText={(text) => formatTime(text)}
                />
              </View>
            </View>

            <RectButton style={styles.button} onPress={() => searchClasses()}>
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
        {classes.map((klass) => (
          <Educator
            key={klass.educator.key}
            educator={klass.educator}
            isFavorite={
              favorites
                .map((fav) => fav.educator.key)
                .includes(klass.educator.key) || false
            }
            klassKey={klass.key}
            klassSubject={klass.subject}
            klassPrice={klass.price}
          />
        ))}
      </ScrollView>
    </View>
  )
}
