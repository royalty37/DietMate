import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text, Button, Input } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => { 
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const submit = () => {
        if (email === "") {
            setErrorMessage("Email is required");
        } else if (!email.includes("@")) {
            setErrorMessage("Email is invalid");          
        } else if(password === "") {
            setErrorMessage("Password is required");
        } else if(passwordConfirm === "") {
            setErrorMessage("Password Confirmation is required");
        } else if(password !== passwordConfirm) {
            setErrorMessage("Passwords do not match");
        } else {
            signup({ email, password });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DietMate</Text>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <View style={styles.input}>
                <Input
                    label="Email"
                    leftIcon={{ type: "material-icons", name: "email" }}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                    inputStyle={styles.input}
                    labelStyle={styles.inputLabel}
                />
                <Input
                    label="Password"
                    leftIcon={{ type: "material-icons", name: "lock" }}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    inputStyle={styles.input}
                    labelStyle={styles.inputLabel}
                    secureTextEntry
                />
                <Input
                    label="Confirm Password"
                    leftIcon={{ type: "material-icons", name: "lock" }}
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    autoCapitalize='none'
                    autoCorrect={false}
                    inputStyle={styles.input}
                    labelStyle={styles.inputLabel}
                    secureTextEntry
                />
            </View>
            <View>
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
                <Button
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                    title="Sign Up"
                    onPress={() => submit()}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <View style={styles.signupLink}>
                        <Text style={styles.signupLink}>{`Already have an account?\nSign in instead`}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

SignupScreen.navigationOptions = () => {
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
        textAlign: "center",
        
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

export default SignupScreen;
