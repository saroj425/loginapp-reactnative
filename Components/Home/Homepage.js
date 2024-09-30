import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Homepage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}> Welcome to the Hpmepage </Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontSize:24,
        fontWeight:600,
    }
});

export default Homepage