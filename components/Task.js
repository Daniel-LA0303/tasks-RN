import React from 'react'
import { Text, StyleSheet, View, Pressable } from "react-native";

const Task = ({item, deleteTask}) => {

    const{title, desc, id} = item


  return (
    <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.text}>{desc}</Text>

            
            <View style={styles.containerBtns}>
                <Pressable 
                    onPress={() => deleteTask(id)}
                    style={[styles.btn, styles.btnDelete]}>
                    <Text style={styles.btnText}>Delete</Text>
                </Pressable>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        borderBottomColor: '#94a3b8',
        borderBottomWidth: 1,
        marginBottom: 1
    },
    label:{
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700'
    },
    text:{
        color: '#76d05a',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },

    containerBtns:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20
    },
    btn:{
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnDelete:{
        backgroundColor: '#ef4444'
    },
    btnText:{
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color:'#fff'
    }
})

export default Task