import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, ScrollView, Modal, Alert } from 'react-native';



const Form = ({modalVisible, setModalVisible, setDatas, datas}) => {
    const[title, setTitle] = useState('')
    const[desc, setDesc] = useState('')

    const handleAdd = () => {
        if([title, desc].includes('')){
            Alert.alert(
              'Error',
              '',
              [{text: 'Ok'}]
            );
            return;
          }
        const newData = {
            title,
            desc
        }
        newData.id = Date.now()
        console.log(newData);
        setDatas([...datas, newData])
        setTitle('')
        setDesc('')
        setModalVisible(false)

    }
  return (
    <Modal
        animationType='fade'
        visible={modalVisible}
    >
        <ScrollView>
            <Text style={styles.title}>CRUD simple {''}</Text>
            <Pressable 
                style={styles.btnCancel}
                onPress={() => {
                    setModalVisible(false)
                    setDesc('')
                    setTitle('')
                }}
                ><Text style={styles.btnCancelText}>Cancel</Text></Pressable>
            <View style={styles.camp}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Title'
                    placeholderTextColor={'#666'}
                    onChangeText={setTitle}
                />
            </View>
            <View style={styles.camp}>
                <Text style={styles.label}>Description</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Description'
                    placeholderTextColor={'#666'}
                    onChangeText={setDesc}
                />
            </View>
            <Pressable style={styles.btnAdd} onPress={handleAdd}>
                <Text style={styles.btnAddText}>Add</Text>
            </Pressable>
        </ScrollView>
    </Modal>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30
        
    },
    btnCancel:{
        marginVertical: 30,
        backgroundColor: '#e30022',
        marginHorizontal: 30,
        padding: 10,
        borderRadius: 10,
    },
    btnCancelText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 15,
        textTransform: 'uppercase'
      },
    camp: {
        marginTop: 5,
        marginHorizontal: 30,
        marginBottom: 5
    },
    label: {
        color: '#000',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    btnAdd: {
        marginVertical: 50,
        backgroundColor: '#76d05a',
        paddingVertical: 10,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnAddText: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '700'
    }
})

export default Form