import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';
import { Button, Text, Card } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const NutritionScreen = ({ navigation, route }) => {
    const newDiet = navigation.getParam('newDiet')

    return (
        <View style={styles.buttonContainer}>           
            <Card containerStyle={{ marginTop: 20 }}>
                <View style={styles.labelView}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={require('../../assets/images/calories.png')}
                    />
                    <Text style={styles.label} h3>Calories: {newDiet.calories}</Text>
                </View>
                <Card.Divider/>
                <View style={styles.labelView}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={require('../../assets/images/protein.png')}
                    />
                    <Text style={styles.label} h3>Protein: {newDiet.protein}</Text>
                </View>
                <Card.Divider/>
                <View style={styles.labelView}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={require('../../assets/images/carb.png')}
                    />
                    <Text style={styles.label} h3>Carbs: {newDiet.carbs}</Text>
                </View>
                <Card.Divider/>
                <View style={styles.labelView}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={require('../../assets/images/fat.png')}
                    />
                    <Text style={styles.label} h3>Fat: {newDiet.fat}</Text>
                </View>
            </Card>
        </View>
    )
};

NutritionScreen.navigationOptions = () => {
    return {
        title: "Nutritional Breakdown",
    };
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginBottom: "2%",
    },
    labelView: {
        flexDirection: "row",
        marginBottom: 6,
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 15,
    },
    radioButtonLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center",
    },
    radioButtonView: {
        flexDirection: "row",
        flex: 1,
    },
    button: {
        marginTop: 50,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: "#3A3B3C",
    },
    buttonContainer: {
        alignSelf: "center",
        width: "80%",
        flex: 1,
        justifyContent: 'center',
        marginBottom: 30,
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
        width: "90%",
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    inputLabel: {
        color: "black",
        marginTop: 20,
    },
    title: {
        fontSize: 50,
        marginTop: "15%",
        marginBottom: "10%",
        alignSelf: "center",
    },
    container: {
        flex: 1,
    },
    rowGroupContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    titleGroupContainer: {
        marginHorizontal: 10,
        marginTop: 30,
    }
});

export default NutritionScreen;