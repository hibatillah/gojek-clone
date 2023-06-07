import * as React from 'react'
import { TextInput, Image, View, StyleSheet } from 'react-native'
import Colors from '../style/Colors'
import { Feather } from '@expo/vector-icons'

const Search = () => {
  return (
    <View style={styles.main}>
     <Feather name='search' size={24} color='black' style={{
       position: 'absolute',
       marginLeft: 20,
       alignSelf: 'center',
     }} />
     <TextInput style={styles.formCari} placeholder='Cari layanan, makanan & tujuan' />
     <Image source={require('../assets/avatar.png')} style={{marginLeft: 15}} />
    </View>
  )
}
export default Search

const styles = StyleSheet.create({
  main: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 23,
    marginBottom: 15,
    flexDirection: 'row',
  },
  formCari: {
    height: 35,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.Hitam.e,
    color: Colors.Hitam.d,
    paddingLeft: 40,
    flex: 1,
  },
})