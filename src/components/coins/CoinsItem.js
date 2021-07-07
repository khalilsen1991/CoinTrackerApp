import React from "react"
import { View, Text, Image, StyleSheet, Platform, Pressable } from "react-native"
import Colors from '../../res/colors'

const CoinsItem = ({ item, onPress }) => {

  const getImgArrow = () => {
    if(item.percent_change_1h > 0){
      return require('../../assets/arrow_up.png')
    } else {
      return require('../../assets/arrow_down.png')
    }
  }

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{`U$S ${item.price_usd}`}</Text>
      </View> 
      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        <Image
          style={styles.imgIcon}
          source={getImgArrow()}
        />
        {/* <Text style={styles.symbolText}>
          {`Contribution Percentage Last Hour${item.percent_change_1h}`}
        </Text> */}
        {/* <Text style={styles.symbolText}>
          {`Contribution Percentage Last Day ${item.percent_change_24h}`}
        </Text>
        <Text style={styles.symbolText}>
          {`Contribution Percentage Last Week ${item.percent_change_7d}`}
        </Text> */}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    paddingLeft: Platform.OS == 'ios' ? 0 : 16,
    marginLeft: Platform.OS == 'ios' ? 16 : 0
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12
  },
  nameText: {
    color: 'white',
    fontSize: 14
  },
  priceText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 12
  },
  percentText: {
    color: 'white',
    fontSize: 14,
    marginRight: 12
  },
  imgIcon:{
    width: 18,
    height: 18,
  }
})
export default CoinsItem;
