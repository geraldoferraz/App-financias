import { View, Text, StyleSheet, FlatList } from "react-native";
import { Link } from 'expo-router'
import Header from "../../home-components/Header/index";
import Balance from "@/home-components/balance";
import Movements from "@/home-components/movements";
import Actions from "@/home-components/Actions";
import { useState } from "react";

export interface ListItem {
  id: number;
  label: string;
  value: string;
  date: string;
  type: number; // 0 para saída, 1 para entrada
}

export const list: ListItem[] = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "20/06/2024",
    type: 0, //saida
  },
  {
    id: 2,
    label: "Freela",
    value: "2000,00",
    date: "18/06/2024",
    type: 1, //entrada
  },
  {
    id: 3,
    label: "Salário",
    value: "2500,00",
    date: "01/06/2024",
    type: 1, //entrada
  },
  {
    id: 4,
    label: "Cartão de Crédito",
    value: "500,00",
    date: "19/05/2024",
    type: 0, 
  },
  {
    id: 5,
    label: "Freela",
    value: "800,00",
    date: "16/05/2024",
    type: 1, 
  },
];

export default function App() {

  const [loadingRefresh, setLoadingRefresh] = useState(false);

  const handleRefresh = () => {
    setLoadingRefresh(true);
    setTimeout(() => {
      setLoadingRefresh(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Header name="Geraldo" />

      <Balance saldo="15.786,09" />

      <Actions />

      <View style={styles.aroundTitle}>
        <Text style={styles.title}>Últimas Transações</Text>
      </View>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
        refreshing={loadingRefresh}
        onRefresh={handleRefresh}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },

  aroundTitle: {
    justifyContent: 'center',
    marginBottom: 20
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
