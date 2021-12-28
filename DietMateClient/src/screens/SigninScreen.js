import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text, Button, Input } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
//import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto-slab';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //let [fontsLoaded] = useFonts({ Roboto_400Regular });

    return (
        <View styles={styles.container}>
            <Text style={styles.title}>DietMate</Text>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <View style={styles.input}>
            <Input
                label="Email"
                inputStyle={styles.input}
                labelStyle={styles.inputLabel}
                leftIcon={{ type: "material-icons", name: "email" }}
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Input 
                label="Password"
                inputStyle={styles.input}
                labelStyle={styles.inputLabel}
                leftIcon={{ type: "material-icons", name: "lock" }}
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
            />
            </View>
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Button
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                title="Sign In"
                onPress={() => signin({ email, password })}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <View style={styles.signupLink}>
                <Text style={styles.signupLink}>Don't have an account? Sign up here</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        backgroundColor: "#3A3B3C",
    },
    buttonContainer: {
        borderRadius: 20,
        alignSelf: "center",
        width: "60%",
    },
    signupLink: {
        color: "black",
        flexDirection: "row",
        justifyContent: "center",
        fontWeight: "bold",
        marginTop: "2%",
    },
    errorMessage: {
        color: "red",
        fontSize: 16,
        alignSelf: "center",
        marginTop: 10,
        fontWeight: "bold",
    },
    input: {
        alignSelf: "center",
        paddingVertical: 4,
        width: "90%",
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    inputLabel: {
        color: "black",
    },
    title: {
        fontSize: 50,
        marginTop: "15%",
        marginBottom: "10%",
        alignSelf: "center",
        //fontFamily: "Roboto_500Regular",
    },
    container: {
        flex: 1,
    },
});

export default SigninScreen;