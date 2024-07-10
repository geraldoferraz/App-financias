import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../../home-components/Header/index";
import Balance from "@/home-components/balance";
import Transaction from "@/money-components/transactions/transaction-form";
import { Link } from 'expo-router'

export default function Login() {
  return (
    <View style={styles.container}>
        <Header name="Geraldo" /> 
        <Balance saldo="15.786,09" />
        <Transaction />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
      },


});
