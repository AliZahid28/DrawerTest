import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const userData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Alice Johnson', age: 23 },
    { id: 4, name: 'Alice Johnson', age: 22 },
    { id: 5, name: 'Alice Johnson', age: 25 },
    { id: 6, name: 'Alice Johnson', age: 21 },
    { id: 7, name: 'Alice Johnson', age: 29 },
    { id: 8, name: 'Alice Johnson', age: 25 },
    { id: 9, name: 'Alice Johnson', age: 26 },
    // Add more user data as needed
];

const Users = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {userData.map((user) => (
                <View key={user.id} style={styles.userCard}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userAge}>Age: {user.age}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 10,
    },
    userCard: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userAge: {
        fontSize: 14,
        color: 'gray',
    },
});

export default Users;