import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDataContext } from './useContext'


const Notes = () => {
    // const { note, id } = route.params
    const {notes, setNotes} = useDataContext();

    const handleDelete=(index)=>{
        setNotes(prevnotes=>prevnotes.filter((note,i)=>i!==index))

    }

    // useEffect(() => {
    //     if (note !== undefined && note !== '') {
    //         setNotes([...notes, note])
    //     }
    // }, [id])

    // const handleDelete = (index) => {
    //     setNotes(prevnotes =>
    //         prevnotes.filter((delnote, i) => i !== index)
    //     );
    // }


    return (
        <View style={{ margin: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false} >
                {
                    notes.length > 0 ? notes.map((note, index) => {
                        return (
                            <View key={index} style={{ borderRadius: 10, backgroundColor: 'white', alignItems: 'center', padding: 15, margin: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ width: 310, paddingRight: 20 }}>
                                    {note}
                                </Text>
                                <TouchableOpacity onPress={() => { handleDelete(index) }} >
                                    <Text style={{ fontSize: 20 }}>X</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }) : <View style={{ height: 650, justifyContent: 'center', alignItems: 'center' }} >

                        <Text style={{ fontSize: 22 }} >You have no Note in a List</Text>
                    </View>
                }
            </ScrollView>
        </View>
    )
}

export default Notes

const styles = StyleSheet.create({})