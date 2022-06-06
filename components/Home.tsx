import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Clock from './Clock'

const Home = () => {
  return (
    <View style={styles.container}>
      <Clock/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container: {
  flex: 1,
  width: "100%",
  // backgroundColor: "blue"
}
})