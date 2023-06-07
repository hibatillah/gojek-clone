import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Colors from '../style/Colors'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const GopayCard = () => {
  return (
    <>
      <View style={{
        backgroundColor: 'white',
        padding: 8,
        alignSelf: 'baseline',
        borderRadius: 8,
      }}>
        <Image source={require('../assets/gopay.png')} />
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Rp. 12.000
        </Text>
        <Text style={{fontSize: 14, fontWeight: '600', color: Colors.Hijau.b}}>
          Klik & Cek Riwayat
        </Text>
      </View>
    </>
  )
}

const Menu = () => {
  const listMenu = [
    { icon: <AntDesign name='arrowup' size={12} color={Colors.Biru.a} />, text: 'Bayar'},
    { icon: <Entypo name='plus' size={12} color={Colors.Biru.a} />, text: 'Top Up'},
    { icon: <Ionicons name='rocket' size={12} color={Colors.Biru.a} />, text: 'Explore'},
  ]

  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}>
      {
        listMenu.map((val) => (
          <View style={{
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <View style={styles.cardMenu}>{val.icon}</View>
            <Text style={{
              fontSize: 12,
              marginTop: 7,
              color: 'white',
            }}>
              {val.text}
            </Text>
          </View>
        ))
      }
    </View>
  )
}

export default function  Gopay() {
  return (
    <View style={styles.main}>
      <View style={styles.card}>
        <GopayCard />
        <Menu />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  card: {
    backgroundColor: Colors.Biru.a,
    borderRadius: 15,
    padding: 16,
    flexDirection: 'row',
  },
  cardMenu: {
    backgroundColor: 'white',
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    borderRadius: 8,
  },
});