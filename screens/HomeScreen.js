import React, {useState} from 'react'
import { StyleSheet, View, Text, FlatList, Button } from 'react-native'

export default function HomeScreen({ navigation }) {



  const [toDoList, setTodoList] = useState(['test','test']);



  return (
    <View style={styles.container}>
      <Text>
        To Do's
      </Text>

<Button onPress={() => navigation.navigate('AddTask', {list: toDoList})} title='Add'></Button>
      <FlatList
        renderItem={({item, index, separators}) => (
          <Text
            key={item.key}>
         {item}
          </Text>
        )}
        data={toDoList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})
