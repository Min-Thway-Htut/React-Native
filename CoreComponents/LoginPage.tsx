import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';
import axios from 'axios';
import { useNavigation } from 'expo-router';


export default function SignUpForm(){
    const [action, setAction] = useState('Login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
   
    const handleSubmit = () => {
        if (action === 'Login'){
            Alert.alert('Login', `Email: ${email}, Password: ${password}`);
        } else {
            Alert.alert('Sign Up', `Name: ${name}, Email: ${email}, Password: ${password}`);
        }
    }



    return(
        <View style={styles.container}>
            <View style={styles.secondContainer}>  
               <Image style={styles.image} source={require('./images/fraunhofer-logo.png')} />
            

                {action === 'SignUp' && (
                    <TextInput 
                    placeholder={'Name'}
                    style={styles.input}
                    value={name}
                    onChangeText={setName}/>
                )}

               <TextInput
                 placeholder={'Email'}
                 style={styles.input}
                 value={email}
                 onChangeText={setEmail}>
                </TextInput>

                <TextInput
                 placeholder={'Password'}
                 style={styles.input}
                 value={password}
                 secureTextEntry
                 onChangeText={setPassword}>
                </TextInput>
                
                <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.login}>{action === 'Login' ? 'Login' : 'Sign Up'}</Text>
            </TouchableOpacity>
                
            <TouchableOpacity onPress={() => setAction(action === 'Login' ? 'SignUp' : 'Login')}>
                <Text style={styles.text}>
                    {action === 'Login'
                    ? ' Sign up here if an account has not been created yet!'
                    : 'Already have an account? Login here' }
                   </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009374',
    },
    secondContainer:{
        width: 600,
        height: 600,
        backgroundColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        backgroundColor: '#009374',
        width: 350,
        height: 35,
        padding: 5,
        margin: 10,
        color: '#fff',
        borderRadius: 5,
    },
    image:{
        width: 350,
        height: 60,
        marginBottom: 50,
    },
    login:{
        backgroundColor: '#121212',
        color: '#fff',
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 20,
        fontSize: 13,
    },
    text:{
        fontSize: 12,
        marginTop: 20,
        color: 'blue',
        textDecorationLine: 'underline',
    }
})


