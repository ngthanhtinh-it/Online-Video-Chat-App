import { Link } from 'expo-router';
import React from 'react'
import { Button,TextInput,View,Text, StyleSheet, Dimensions } from 'react-native';

export default function LobbyScreen() {
    return (
        <View style={styles.container}>
            <View style={{gap:20,}}>
                <Text style={styles.TextLabelCustom}>Forget Password</Text>
                <Text>Provide the email address linked with your account to reset your password</Text>
            </View>
            <View style={styles.TextInputCustom}>
                <TextInput placeholder='Please enter your registered email'></TextInput>
            </View>
            <View>
                <Button title='Request Password Reset Link'></Button>
            </View>
            <View>
                <Link href="/(auth)/LoginForm" push asChild>
                    <Button title='Cancel'></Button>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: 20,
        gap:20,
    },
    TextInputCustom: {
        borderWidth:1,
        borderColor: "#a6a6a7ff",
        borderRadius: 10,
        
    },
    TextLabelCustom:{
        fontWeight:"bold",
        fontSize:30,
    },
})
