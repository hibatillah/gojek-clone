import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Menu, Search, Gopay, MenuUtama } from './components'

const App = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <Search />
      <Gopay />
      <MenuUtama />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
})