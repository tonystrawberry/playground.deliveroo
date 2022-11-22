import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectTotalPrice } from '../slices/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from "react-currency-formatter"

const BasketIcon = () => {
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectTotalPrice)
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{ items.length }</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
