import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';
import { Button, Text, Card } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import { DataTable } from 'react-native-paper';

const ViewDietScreen = ({ navigation }) => {
    const newDiet = navigation.getParam('newDiet');

    const TableRows = () => {
        return (
            newDiet.foods.map((food, index) => {
                return (
                    <DataTable.Row key={index}>
                        <DataTable.Cell>{food.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{food.calories}</DataTable.Cell>
                        <DataTable.Cell numeric>{food.protein}</DataTable.Cell>
                        <DataTable.Cell numeric>{food.carbs}</DataTable.Cell>
                        <DataTable.Cell numeric>{food.fat}</DataTable.Cell>
                    </DataTable.Row>
                    )
                }
            )
        )
    }

    return (
        <View style={styles.buttonContainer}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Food</DataTable.Title>
                    <DataTable.Title numeric>Calories</DataTable.Title>
                    <DataTable.Title numeric>Protein</DataTable.Title>
                    <DataTable.Title numeric>Carbs</DataTable.Title>
                    <DataTable.Title numeric>Fat</DataTable.Title>
                </DataTable.Header>
                {TableRows()}
                <DataTable.Row>
                    <DataTable.Cell>Total</DataTable.Cell>
                    <DataTable.Cell numeric>{newDiet.totalCalories}</DataTable.Cell>
                    <DataTable.Cell numeric>{newDiet.totalProtein}</DataTable.Cell>
                    <DataTable.Cell numeric>{newDiet.totalCarbs}</DataTable.Cell>
                    <DataTable.Cell numeric>{newDiet.totalFat}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    )
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginBottom: "2%",
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
        width: "100%",
        flex: 1,
        justifyContent: 'flex-end',
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

export default ViewDietScreen;