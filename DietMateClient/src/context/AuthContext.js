import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import axiosApi from '../api/axios';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return { errorMessage: '', userToken: action.payload };
        case 'signout':
            return { errorMessage: '', userToken: null };
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        default:
            return state;
    }
};

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await axiosApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('MainFlow');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
    }
};

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('Signin');
};

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        return navigate('MainFlow');
    } else {
        navigate('Signin');
    }
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await axiosApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('Signin');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, tryLocalSignin, clearErrorMessage, signup },
    { errorMessage: '', token: null }
);

