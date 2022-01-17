import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Alert, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text, Button, Input, Divider } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { RadioButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Diet from '../classes/diet';

const CreateDietScreen = ({ navigation }) => {
    const [gender, setGender] = useState(0);
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [dietGoal, setDietGoal] = useState(0);
    const [dietGoalItems, setDietGoalItems] = useState([
        {label: 'Lose weight fast (1kg per week)', value: 0},
        {label: 'Lose weight (0.5kg per week)', value: 1},
        {label: 'Maintain weight', value: 2},
        {label: 'Gain weight (0.5kg per week)', value: 3},
        {label: 'Gain weight fast (1kg per week)', value: 4},
    ]);
    const [activityLevel, setActivityLevel] = useState(0);
    const [activityLevelItems, setActivityLevelItems] = useState([
        {label: 'Sedentary (little or no exercise)', value: 0},
        {label: 'Lightly active (light exercise 1-3 days per week)', value: 1},
        {label: 'Moderately active (moderate exercise 3-5 days per week)', value: 2},
        {label: 'Active (daily exercise or intense exercise 3-5 days per week)', value: 3},
        {label: 'Very active (intense exercise 6-7 days/week)', value: 4},
        {label: 'Extra active (very intense daily exercise and/or physical job)', value: 5},
    ]);
    const [isWeightlifter, setIsWeightlifter] = useState(false);
    const [isOverweight, setIsOverweight] = useState(false);
    
    const [dietOpen, setDietOpen] = useState(false);
    const [activityLevelOpen, setActivityLevelOpen] = useState(false);

    const [weightlifterRadioButtonEnabled, setWeightlifterRadioButtonEnabled] = useState(false);

    const submit = () => {
        if (age === "") {
            Alert.alert("Please enter your age.");
        } else if (isNaN(age)) {
            Alert.alert("Please enter a valid age.");
        } else if (height === "") {
            Alert.alert("Please enter your height.");
        } else if (isNaN(height)) {
            Alert.alert("Please enter a valid height.");
        } else if (weight === "") {
            Alert.alert("Please enter your weight.");
        } else if (isNaN(weight)) {
            Alert.alert("Please enter a valid weight.");
        } else {
            const newDiet = new Diet(dietGoal, parseInt(age), gender, parseInt(height), parseInt(weight), activityLevel, isWeightlifter, isOverweight);
            newDiet.printDiet();
            navigation.navigate('Nutrition', { newDiet : newDiet });
        }
    };

    return  (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.input}>              
                <View style={styles.titleGroupContainer}>
                    <Text style={styles.label}>Gender</Text>
                    <View style={styles.rowGroupContainer}>
                        <View style={styles.radioButtonView}>
                            <RadioButton 
                                value="0" // Male
                                status={gender === 0 ? 'checked' : 'unchecked'}
                                onPress={() => setGender(0)}
                            />
                            <Text style={styles.radioButtonLabel}>Male</Text>
                        </View>
                        <View style={styles.radioButtonView}>
                            <RadioButton
                                value="1" // Female
                                status={gender === 1 ? 'checked' : 'unchecked'}
                                onPress={() => setGender(1)}
                            />
                            <Text style={styles.radioButtonLabel}>Female</Text>
                        </View>
                    </View>
                </View>
                <Input
                    label="Age"
                    value={age}
                    onChangeText={setAge}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='numeric'
                    inputStyle={styles.input}
                    labelStyle={styles.inputLabel}
                    leftIcon={{ type: "material-icons", name: "person" }}
                /> 
                <Input
                    label="Height (cm)"
                    value={height}
                    onChangeText={setHeight}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='numeric'
                    inputStyle={styles.input}
                    labelStyle={styles.inputLabel}
                    leftIcon={{ type: "material-community", name: "human-male-height" }}          
                />  
                <Input
                    label="Weight (kg)"
                    value={weight}
                    onChangeText={setWeight}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='numeric'
                    inputStyle={styles.input}
                    labelStyle={styles.inputLabel}
                    leftIcon={{ type: "font-awesome-5", name: "weight" }}
                />
                <View style={styles.titleGroupContainer}>
                    <Text style={styles.label}>Goal</Text>
                    <DropDownPicker // Dropdown picker for diet goal
                        open={dietOpen}
                        value={dietGoal}
                        items={dietGoalItems}
                        setOpen={setDietOpen}
                        setValue={setDietGoal}
                        setItems={setDietGoalItems}
                        listMode="SCROLLVIEW"
                        zIndex={3000}
                        zIndexInverse={1000}
                    />
                </View>
                <View style={styles.titleGroupContainer}>
                    <Text style={styles.label}>Activity Level</Text>
                    <DropDownPicker // Dropdown picker for Activity Level
                        open={activityLevelOpen}
                        value={activityLevel}
                        items={activityLevelItems}
                        setOpen={setActivityLevelOpen}
                        setValue={setActivityLevel}
                        setItems={setActivityLevelItems}
                        listMode="SCROLLVIEW"
                        zIndex={1000}
                        zIndexInverse={3000}
                        onChangeValue={(value) => {
                            if (value === 0) {
                                setWeightlifterRadioButtonEnabled(false);
                                setIsWeightlifter(false);
                            } else 
                                setWeightlifterRadioButtonEnabled(true);                          
                        }}
                    />
                </View>
                <View style={styles.titleGroupContainer}>
                    <Text style={styles.label}>Do you weightlift?</Text>
                    <View style={styles.rowGroupContainer}>
                        <View style={styles.radioButtonView}>
                            <RadioButton 
                                value="true"
                                status={isWeightlifter === true ? 'checked' : 'unchecked'}
                                onPress={() => setIsWeightlifter(true)}
                                disabled={!weightlifterRadioButtonEnabled}
                            />
                            <Text style={styles.radioButtonLabel}>Yes</Text>
                        </View>
                        <View style={styles.radioButtonView}>
                            <RadioButton
                                value="false"
                                status={isWeightlifter === false ? 'checked' : 'unchecked'}
                                onPress={() => setIsWeightlifter(false)}
                                disabled={!weightlifterRadioButtonEnabled}
                            />
                            <Text style={styles.radioButtonLabel}>No</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.titleGroupContainer}>
                    <Text style={styles.label}>Are you overweight?</Text>
                    <View style={styles.rowGroupContainer}>
                        <View style={styles.radioButtonView}>
                            <RadioButton 
                                value="true"
                                status={isOverweight === true ? 'checked' : 'unchecked'}
                                onPress={() => setIsOverweight(true)}
                            />
                            <Text style={styles.radioButtonLabel}>Yes</Text>
                        </View>
                        <View style={styles.radioButtonView}>
                            <RadioButton
                                value="false"
                                status={isOverweight === false ? 'checked' : 'unchecked'}
                                onPress={() => setIsOverweight(false)}
                            />
                            <Text style={styles.radioButtonLabel}>No</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={styles.button}
                        title="Next"
                        onPress={() => submit()}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
};

CreateDietScreen.navigationOptions = () => {
    return {
        title: "Enter details for new diet",
    };
}

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
        width: "80%",
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

export default CreateDietScreen;