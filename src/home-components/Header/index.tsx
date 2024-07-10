import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Main: undefined;
  UserProfile: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UserProfile'>;

interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleProfilePress = () => {
    navigation.navigate('UserProfile'); // Nome da rota da página de perfil
  };

  return (
    <View style={styles.container}>
      <MotiView 
        style={styles.content}
        from={{ translateY: -150 }}
        animate={{ translateY: 0 }}
        transition={{ type: 'timing', duration: 800, delay: 300 }}
      >
        <MotiText 
          style={styles.username}
          from={{ translateX: -300 }}
          animate={{ translateX: 0 }}
          transition={{ type: 'timing', duration: 800, delay: 900 }}
        >
          Olá, {name}
        </MotiText>
        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.buttonUser}
          onPress={handleProfilePress}
        >
          <Feather name="user" size={27} color="#FFF" />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000FF',
    paddingTop: 66,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 30
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    marginBottom: 35,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    marginBottom: 35,
  }
});
