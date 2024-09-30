// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Yup from 'yup';
import { Formik } from 'formik';

const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    // Simulate login request
    setTimeout(() => {
      //Alert.alert('Logged in successfully!');
      navigation.navigate("Home")
      setLoading(false);
    }, 2000);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Login</Text>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleLogin} validationSchema={validationSchema} >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
            
            <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
            <Button onPress={handleSubmit} title={loading ? 'Logging in...' : 'Login'} disabled={loading} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
