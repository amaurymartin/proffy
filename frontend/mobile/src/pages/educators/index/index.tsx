import React, { useEffect, useState } from 'react'

import {
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native'

import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'

import Header from '../../../components/header'
import Educator from '../../../components/educator'

import styles from './styles'
import api from '../../../services/api'

type ClassIndexResponse = {
  classes: Class[]
}

type Class = {
  key: string
  subject: string
  description: string
  price: number
  status: number
  educator: {
    key: string
    avatar: string
    name: string
    bio: string
    email: string
    whatsapp: string
  }
}

export default function EducatorsIndex(): JSX.Element {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')
  const [classes, setClasses] = useState<Class[]>([])

  useEffect(() => {
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

    getClasses()
  }, [])

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
            klassSubject={klass.subject}
            klassPrice={klass.price}
          />
        ))}
      </ScrollView>
    </View>
  )
}
