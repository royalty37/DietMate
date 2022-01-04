import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, ActivityIndicator, View, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
//import { Context as UserContext } from '../context/UserContext';

const HomeScreen = ({ navigation }) => {
    const { state, signout, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DietMate</Text>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <View style={styles.buttonContainer}>
                <Button
                    buttonStyle={styles.button}
                    title="New Diet"
                    onPress={() => submit()}
                />
                <Button
                    buttonStyle={styles.button}
                    title="Existing Diets"
                    onPress={() => submit()}
                />
                <Button
                    buttonStyle={styles.button}
                    title="Custom Foods/Meals"
                    onPress={() => submit()}
                />
                <View style={styles.footerContainer}>
                    <Button
                        buttonStyle={styles.button}
                        title="Settings"
                        onPress={() => submit()}
                    />
                    <Button
                        buttonStyle={styles.button}
                        title="Sign Out"
                        onPress={() => signout()}
                    />
                </View>
            </View>
        </View>
    )
};

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        borderRadius: 15,
        paddingVertical: 10,
        backgroundColor: "#3A3B3C",
    },
    buttonContainer: {       
        alignSelf: "center",
        width: "80%",
        flex: 1,
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
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

export default HomeScreen;

