import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test1"></CategoryCard>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test2"></CategoryCard>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test3"></CategoryCard>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test4"></CategoryCard>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test5"></CategoryCard>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test6"></CategoryCard>
    </ScrollView>
  )
}

export default Categories
