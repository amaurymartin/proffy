import React, { useEffect, useState } from 'react'

import { Image, Text, View } from 'react-native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import { RectButton } from 'react-native-gesture-handler'

import homeImg from '../../assets/images/home.png'
import studyIcon from '../../assets/images/icons/study.png'
import teachIcon from '../../assets/images/icons/teach.png'
import heartIcon from '../../assets/images/icons/heart.png'

import { Pages } from '../pages'

import api from '../../services/api'

import styles from './styles'

export default function Home(): JSX.Element {
  const { navigate } = useNavigation<NativeStackNavigationProp<Pages>>()

  const [connections, setConnections] = useState(0)

  useEffect(() => {
    const acceptedClassStatus = 1

    async function getConnectionsCount() {
      await api
        .get('classes', { params: { status: acceptedClassStatus } })
        .then((response) => {
          setConnections(response.headers['x-total-count'] || 0)
        })
        .catch(() => {
          setConnections(0)
        })
    }

    getConnectionsCount()
  }, [])

  return (
    <View style={styles.container}>
      <Image source={homeImg} style={styles.banner} />

      <Text style={styles.title}>
        Welcome,{'\n'}
        <Text style={styles.titleBold}>What you need to do?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={() => navigate('EducatorsIndexTabs')}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Study</Text>
        </RectButton>

        <RectButton
          onPress={() => navigate('EducatorsNew')}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={teachIcon} />
          <Text style={styles.buttonText}>Teach</Text>
        </RectButton>
      </View>

      <Text style={styles.stats}>
        More than {connections} people connected <Image source={heartIcon} />
      </Text>
    </View>
  )
}
