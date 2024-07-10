import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';

export type RootStackParamList = {
  Main: undefined;
  UserProfile: undefined;
  Login: undefined;
  Home: undefined; 
};

type CustomHeaderNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const CustomHeader = () => {
  const navigation = useNavigation<CustomHeaderNavigationProp>();
  const [loading, setLoading] = useState(false);

  function handleUserExit() {
    Alert.alert('Exit', 'Deseja sair do app?', [
      {
        text: 'Sim',
        onPress: () => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigation.navigate('Login');
          }, 2000); // Simulando 2 segundos de carregamento
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.headerWrapper}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="menufold" size={28} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.iconButton}>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonUser}>
            <Feather name="user" size={27} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonUser}>
            <AntDesign name="customerservice" size={27} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonUser} onPress={handleUserExit}>
            <MaterialIcons name="exit-to-app" size={27} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#8000FF',
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    flex: 1,
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
    marginRight: 55,
  },
  headerTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonUser: {
    alignItems: 'center',
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    borderRadius: 22,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default CustomHeader;