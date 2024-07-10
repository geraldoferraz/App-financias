import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { CartesianChart, Line, useChartPressState, Bar  } from "victory-native";
import Animated, { SharedValue, useAnimatedProps } from "react-native-reanimated";
import { useEffect, useState } from "react";
import { Circle, useFont } from "@shopify/react-native-skia";
import { format } from "date-fns";
import Header from "@/home-components/Header";
import LineGraph from "@/graph-components/lineGraph";
import PieChart from "@/graph-components/barGraph";

const DATA = [
    { day: new Date("2024-06-23").getTime(), price: 110},
    { day: new Date("2024-06-20").getTime(), price: 500},
    { day: new Date("2024-06-21").getTime(), price: 630},
    { day: new Date("2024-06-22").getTime(), price: 420},
    { day: new Date("2024-06-23").getTime(), price: 900},
    { day: new Date("2024-06-24").getTime(), price: 940},
    { day: new Date("2024-06-25").getTime(), price: 820},
    { day: new Date("2024-06-25").getTime(), price: 1020}
]

Animated.addWhitelistedNativeProps({ text: true })
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
    return <Circle cx={x} cy={y} r={7} color="#e6ccef" />;
}

export default function Login() {

    const font = useFont(require("../../fonts/Poppins-Bold.ttf"));

    const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 }})

    const animatedText = useAnimatedProps(() => {
        return {
            text: `R$ ${state.y.price.value.value.toFixed(2)}`,
            defaultValue: ""
        }
    })

    const animatedDateText = useAnimatedProps(() => {
        const date = new Date(state.x.value.value)
        return {
            text: `${date.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })}`,
            defaultValue: ""
        }
    })

    const formattedDate = new Date(DATA[DATA.length - 1].day).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

  return (
    <View style={styles.container}>
        <Header name="Geraldo" />
        <ScrollView>
            <LineGraph />
            <PieChart />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    }
  
});
