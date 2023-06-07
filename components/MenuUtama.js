import * as React from 'react'
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'
import Colors from '../style/Colors'

const ItemMenu = ({ icon, warna, judul }) => {
    const iconSize = judul === 'Go Club' ? 25 : judul === 'Go Pulsa'? 15 : 20
  
    return (
      <View style={{
        justifyContent: 'space-around',
        flex: 1,
        marginLeft: 15,
        marginTop: 10,
      }}>
        <View style={{
          backgroundColor: warna,
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={icon} resizeMethod='center' style={{
            width: iconSize,
            height: iconSize,
          }} />
        </View>
        <Text style={{marginTop: 10}}>{judul}</Text>
      </View>
    )
  }

const MenuUtama = () => {
  const listMenu = [
    {
      'warna': Colors.Hijau.b,
      'icon': require('../assets/motor.png'),
      'text': 'Go Ride',
    },
    {
      'warna': Colors.Hijau.b,
      'icon': require('../assets/car.png'),
      'text': 'GoCar',
    },
    {
      'warna': Colors.Merah,
      'icon': require('../assets/food.png'),
      'text': 'GoFood',
    },
    {
      'warna': Colors.Hijau.b,
      'icon': require('../assets/send.png'),
      'text': 'Go Send',
    },
    {
      'warna': Colors.Merah,
      'icon': require('../assets/mart.png'),
      'text': 'Go Mart',
    },
    {
      'warna': Colors.Biru.a,
      'icon': require('../assets/phone.png'),
      'text': 'Go Pulsa',
    },
    {
      'warna': '',
      'icon': require('../assets/club.png'),
      'text': 'Go Club',
    },
    {
      'warna': Colors.Hitam.d,
      'icon': require('../assets/lain.png'),
      'text': 'Lainnya',
    }
  ]

  return (
    <View style={styles.main}>
      <FlatList
        horizontal={false}
        numColumns={4}
        data={listMenu}
        renderItem={({ item }) => <ItemMenu judul={item.text} icon={item.icon} warna={item.warna} />}
      />
    </View>
  )
}

export default MenuUtama

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    marginTop: 32,
  }
})