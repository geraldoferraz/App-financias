import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '@/login-componentes/form/index';

export default function Login() {
  return (
    <View style={styles.container}>
      <LoginForm />
      {/* <Link href={"/"}>Voltar</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: 'center', // Opcional: centralizar o conteúdo verticalmente
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 16,
    marginBottom: 20
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  },
  
});
