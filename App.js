import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import Home from './components/Home';
import Form from './components/Form';
import Task from './components/Task';


export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [datas, setDatas] = useState([]);

  const deleteTask = (id) => {
    console.log('delete', id);
    const newDatas = datas.filter(data => data.id !== id)
    setDatas(newDatas)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Simple CRUD React Native
      </Text>
      <Pressable
        style={styles.btnNewTask}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextNewTask}>Add New Data</Text>
      </Pressable>
      {datas.length === 0 ? <Text style={styles.noTask}>There's no Tasks</Text> :
          <FlatList
            style={styles.list}
            data={datas}
            keyExtractor={(item) => item.id}
            renderItem = {({item}) => {
              return(
                <Task 
                  item={item}
                  key={item.id}
                  deleteTask={deleteTask}
                />
              )
            }}
          />
        }      

        <Form 
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          datas={datas}
          setDatas={setDatas}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f3f4f6',
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: 'bold',
    marginTop: 30
  },

  btnNewTask:{
    backgroundColor: '#76d05a',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextNewTask: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  noTask:{
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },

  list: {
    marginTop: 50,
     marginHorizontal: 30
  }
});
