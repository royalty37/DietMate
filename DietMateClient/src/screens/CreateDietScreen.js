import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text, Button, Input } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const CreateDietScreen = ({ navigation }) => {
    const [dietGoal, setDietGoal] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] 

};