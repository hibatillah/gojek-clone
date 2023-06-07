import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../style/Colors'

const Menu = () => {
  const listMenu = ['Beranda','Promo','Pesanan','Chat']
  
  return (
    <View style={styles.main}>
      <View style={styles.mainMenu}>
        {listMenu.map(item => 
          item === 'Beranda'? (
            <View style={styles.kotakActive}>
              <Text style={styles.textActive}>{item}</Text>
            </View>
          ) : (
            <View style={styles.kotak}>
              <Text style={styles.textUnActive}>{item}</Text>
            </View>
          )
        )}
      </View>
    </View>
  )
}
export default Menu

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    backgroundColor: Colors.Hijau.b,
    height: 80,
  },
  mainMenu: {
    height: 50,
    backgroundColor: Colors.Hijau.a,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  textUnActive: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textActive: {
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 2,
    color: Colors.Hijau.a,
  },
  kotak: {
    height: 40,
    borderRadius: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kotakActive: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


























