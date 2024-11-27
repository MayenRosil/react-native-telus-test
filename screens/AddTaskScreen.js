import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Text } from 'react-native'

export default function AddTaskScreen({ route, navigation }) {

  const {list} = route.params;

  const [title, setTitle] = useState('');

  const createTast = () => {
    if(title.length > 0){

      list.push(title);
      navigation.goBack()
    }
  }


  return (
    <View style={styles.container}>
      <Text>Add Title</Text>
      <TextInput   style={{
                    backgroundColor:'white', borderBottomColor: 'black', marginVertical: 5, borderBottomWidth: 1
                  }} onChangeText={setTitle} />
      <Button onPress={() => createTast()} title='Save'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
})
