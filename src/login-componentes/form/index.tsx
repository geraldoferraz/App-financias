import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Main: undefined;
  UserProfile: undefined;
  Login: undefined;
  Home: undefined; 
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  useFocusEffect(
    React.useCallback(() => {
      // Limpar campos de email e senha quando a tela ganhar foco
      setEmail('');
      setPassword('');
    }, [])
  );

  const handleSignIn = () => {
    setLoading(true);

    setTimeout(() => {
      if (email === 'geraldoferraz876@gmail.com' && password === 'ggferraz87') {
        setLoading(false);
        setEmail('');
        setPassword('');
        navigation.navigate('Main');
      } else {
        setLoading(false);
        setEmail('');
        setPassword('');
        Alert.alert('Falha na Autenticação', 'O email ou a senha que você digitou está incorreto. Por favor, tente novamente.', [
          {
            text: 'OK',
            style: 'cancel',
          },
        ]);
      }
    }, 2000); // Simulando 2 segundos de carregamento
  };

  return (
    <ImageBackground source={require('../../../assets/images/pexels3.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <MotiView 
          style={styles.form}
          from={{ translateX: -500 }}
          animate={{ translateX: 0 }}
          transition={{ type: 'timing', duration: 600, delay: 100 }}
        >
          <MotiView 
            style={styles.userIcon}
            from={{ translateY: -250 }}
            animate={{ translateY: 0 }}
            transition={{ type: 'timing', duration: 800, delay: 300 }}
          >
            <View style={styles.aroundIcon}>
              <Feather name="user" size={36} color="black" />
            </View>
          </MotiView>
          
          <View style={styles.inputWrapper}>
            <FontAwesome name="envelope" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
      
          <View style={styles.inputWrapper}>
            <FontAwesome name="lock" size={27} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              placeholderTextColor="#666"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
      
          <TouchableOpacity style={styles.buttonSubmit} onPress={handleSignIn} disabled={loading}>
            <View style={styles.buttonContent}>
              {loading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.buttonText}>Sign In</Text>}
              <AntDesign name="login" size={28} color="#FFF" style={styles.icon} />
            </View>
          </TouchableOpacity>
      
          <Text style={styles.text}>Don't have an account? <Text style={styles.span} onPress={() => console.log('Sign Up')}>Sign Up</Text></Text>
          <Text style={styles.textLine}>Or With</Text>
      
          <TouchableOpacity style={styles.btnGoogle} onPress={() => console.log('Sign In With Google')}>
            <AntDesign name="google" size={24} color="#8000FF" style={styles.googleIcon} />
            <Text style={styles.buttonGoogleText}>Sign In With Google</Text>
          </TouchableOpacity>
        </MotiView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 20,
    width: '87%',
    maxWidth: 450,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ecedec',
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
  },
  inputIcon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000', // Adicionei isso para garantir que o texto inserido também seja preto
  },
  buttonSubmit: {
    backgroundColor: '#8000FF',
    borderRadius: 10,
    height: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    marginVertical: 10,
  },
  textLine: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  span: {
    color: '#2d79f3',
    fontWeight: 'bold',
  },
  btnGoogle: {
    marginTop: 15,
    alignSelf: 'stretch',
    height: 50,
    borderRadius: 10,
    borderColor: '#ededef',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  googleIcon: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'  
  },
  buttonGoogleText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  aroundIcon: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
  }

});
