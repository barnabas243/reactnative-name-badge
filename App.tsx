import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <LinearGradient
        colors={['#E6E6FA', '#FF1493']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.subtitleText}>My name is</Text>
        <View style={styles.boxContainer}>
          <Text style={styles.innerBoxText}>Barnabas Tan</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 60,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitleText: {
    fontSize: 24,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
  },
  boxContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    overflow: 'hidden',
  },
  innerBoxText: {
    fontSize: 60,
    fontFamily: 'Arial',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ff1c8d',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 1,
  },
});