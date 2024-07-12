import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDataContext } from './useContext';

const Home = () => {
    const {notes,setNotes} =useDataContext();
    const [note,setNote]=useState('')
    const [error,setError] =useState(false)


    const handleClick = () => {
        if(note!==''){
            setNotes([...notes,note])
            setNote('')
            setError(false)
        }else{
            setError(true)
        }
    }

    return (
        <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 25, color: 'black' }}>ADD NOTE</Text>
            <View style={{ marginTop: 10 }}>
                <TextInput value={note} onChangeText={(newnote) => { setNote(newnote) }} placeholder='Enter Note' style={{ borderColor: 'black', borderWidth: 1, borderRadius: 5, padding: 10 }} />
                {
                    error && <Text style={{ fontWeight: 300, marginLeft: 2, color: "red", }}>Please enter some note</Text>
                }
                
                    <Text style={{marginLeft:2,marginTop:2}}>Your list has {notes.length>0?notes.length:'0'} {notes.length>1?'notes':'note'}</Text>
                
            </View>
            <TouchableOpacity onPress={handleClick} style={{ borderRadius: 15, width: 100, marginTop: 20, marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', backgroundColor: 'lightgreen' }} >
                <Text style={{ padding: 10, color: 'black' }} >Add Note</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})