import React from 'react'

import { ImageBackground, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RectButton } from 'react-native-gesture-handler'

import { Pages } from '../../pages'

import teachImg from '../../../assets/images/teach-background.png'

import styles from './styles'

export default function EducatorsNew(): JSX.Element {
  const { goBack } = useNavigation<NativeStackNavigationProp<Pages>>()

  return (
    <View style={styles.container}>
      <ImageBackground
        source={teachImg}
        resizeMode="contain"
        style={styles.content}
      >
        <Text style={styles.title}>Wanna be an educator?</Text>
        <Text style={styles.description}>
          Use website to register yourself as an educator
        </Text>
      </ImageBackground>

      <RectButton onPress={() => goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Got it</Text>
      </RectButton>
    </View>
  )
}
