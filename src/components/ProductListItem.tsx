import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Colors from '@/src/constants/Colors'

const ProductListItem = ({ product }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

export default ProductListItem
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
})
