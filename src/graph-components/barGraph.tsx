import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Pie, PolarChart } from "victory-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const dataBar = [
  { type: "Saídas", count: 300 },
  { type: "Entradas", count: 50 }
];

export default function PieChartComponent() {
  const [data, setData] = useState(dataBar);

  useEffect(() => {
    setData(dataBar);
  }, []);

  const total = data.reduce((acc, item) => acc + item.count, 0);
  const entradas = data.find(item => item.type === "Entradas")?.count || 0;
  const saidas = data.find(item => item.type === "Saídas")?.count || 0;
  const entradasPercent = ((entradas / total) * 100).toFixed(2);
  const saidasPercent = ((saidas / total) * 100).toFixed(2);

  const chartData = data.map(item => ({
    label: item.type,
    value: item.count,
    color: item.type === "Saídas" ? "#e6ccef" : "#8000FF"
  }));

  return (
    <View style={styles.container}>
      <View style={styles.titleGraph}>
        <Text style={styles.titleGraphText}>
          Porcentagem de transações de Pagamento e Recebimento.
        </Text>
      </View>
      <ScrollView>
        <View style={styles.aroundGraphs}>
          <View style={styles.content}>
            <View style={styles.chartContainer}>
              <View style={styles.legendContainer}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendColorBox, { backgroundColor: "#8000FF" }]} />
                  <Text style={styles.legendText}>Recebimentos</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendColorBox, { backgroundColor: "#e6ccef" }]} />
                  <Text style={styles.legendText}>Pagamentos</Text>
                </View>
              </View>
              <PolarChart
                data={chartData}
                labelKey="label"
                valueKey="value"
                colorKey="color"
              >
                <Pie.Chart />
              </PolarChart>
            </View>

            <View style={styles.percentContainer}>
              <View style={styles.percentBox}>
                <Text style={styles.percentText}>Recebimentos</Text>
                <Text style={styles.percentValue}>{entradasPercent}%</Text>
              </View>
              <View style={styles.percentBox}>
                <Text style={styles.percentText}>Pagamentos</Text>
                <Text style={styles.percentValue}>{saidasPercent}%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },

  titleGraph: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15
  },

  titleGraphText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center'
  },

  aroundGraphs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 80
  },

  content: {
    width: "100%",
    height: 400,
    marginRight: 15
  },

  chartContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    marginLeft: 8,
    padding: 5,
    backgroundColor: "#eee",
    paddingTop: 35,
    paddingBottom: 20,
    marginTop: -65,
    marginBottom: 20,
    borderRadius: 5
  },

  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  legendColorBox: {
    width: 20,
    height: 20,
    marginRight: 6,
    padding: 12,
    borderRadius: 10
  },

  legendText: {
    fontSize: 16,
    fontWeight: '600'
  },

  percentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  percentBox: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%'
  },

  percentText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2
  },

  percentValue: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  }
});

