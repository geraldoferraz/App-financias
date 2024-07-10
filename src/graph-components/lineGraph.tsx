import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { CartesianChart, Line, useChartPressState  } from "victory-native";
import Animated, { SharedValue, useAnimatedProps } from "react-native-reanimated";
import { useEffect, useState } from "react";
import { Circle, useFont } from "@shopify/react-native-skia";
import { format } from "date-fns";
import Header from "@/home-components/Header";

const DATA = [
    { day: new Date("2024-01-23").getTime(), price: 110},
    { day: new Date("2024-02-20").getTime(), price: 500},
    { day: new Date("2024-03-21").getTime(), price: 630},
    { day: new Date("2024-04-22").getTime(), price: 420},
    { day: new Date("2024-05-23").getTime(), price: 900},
    { day: new Date("2024-06-24").getTime(), price: 940},
    { day: new Date("2024-03-25").getTime(), price: 820},
    { day: new Date("2024-06-25").getTime(), price: 1020}
]

Animated.addWhitelistedNativeProps({ text: true })
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
    return <Circle cx={x} cy={y} r={7} color="#e6ccef" />;
}

export default function LineGraph() {

    const font = useFont(require("../fonts/Poppins-Bold.ttf"));

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
        <View style={styles.titleGraph}>
            <Text style={styles.titleGraphText}>
                O Gráfico abaixo mostra seu histórico de compras. 
            </Text>
        </View>
        <ScrollView>
            <View style={styles.aroundGraphs}>
            <View style={styles.content}>
            <View style={styles.chartContainer}>
                <CartesianChart
                data={DATA}
                xKey="day"
                yKeys={["price"]}
                chartPressState={state}
                axisOptions={{
                    tickCount: 4, 
                    font: font,
                    labelOffset: { x: 3, y: 2 },
                    labelPosition: 'outset',
                    formatYLabel: (value) => `${value}`,
                    formatXLabel: (value) => format(new Date(value), "MM/yy") 
                }}
                >
                {({ points }) => (
                    <>
                    <Line points={points.price} color="#8000FF" strokeWidth={4} animate={{
                        type: 'timing',
                        duration: 900,
                    }} />
                    {isActive && (
                        <ToolTip x={state.x.position} y={state.y.price.position}></ToolTip>
                    )}
                    </>
                )}
                </CartesianChart>
            </View>

            {isActive && (
                <View style={styles.textContainer}>
                    <AnimatedTextInput
                        editable={false}
                        underlineColorAndroid={'transparent'}
                        style={styles.graphText}
                        animatedProps={animatedText}
                    ></AnimatedTextInput>

                    <AnimatedTextInput
                        editable={false}
                        style={styles.stylesDate}
                        animatedProps={animatedDateText}
                    ></AnimatedTextInput>
                </View>
            )}

            {!isActive && (
                <View style={styles.aroundGraphTitle}>
                    <Text style={styles.stylesDesc}>
                        Última Compra:
                    </Text>
                    <Text style={styles.graphTitle}>
                        R$ {DATA[DATA.length - 1].price.toFixed(2)}
                    </Text>
                    <Text style={styles.stylesDate}>
                        {formattedDate}
                    </Text>
                </View>
            )}
                </View>
            </View>
            </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },

    titleGraph: {
        backgroundColor: '#eee',
        padding: 12,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 15,
        marginLeft: 15
    },

    titleGraphText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    aroundGraphs: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fafafa",
        paddingHorizontal: 15,
        marginTop: 80
    },

    content: {
        width: '100%',
        height: 400,
        marginRight: 15,
    },

    textContainer: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 15,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },

    chartContainer: {
        flex: 1, 
        width: '100%',
        justifyContent: 'center',
        marginLeft: 8,
        padding: 5,
        backgroundColor: '#eee', 
        marginTop: -65,
        marginBottom: 20,
    },

    graphText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
    },

    aroundGraphTitle: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 15,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },

    graphTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
    },

    stylesDate: {
        fontSize: 14,
        fontWeight: '600'
    },

    stylesDesc: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
        left: 0,
        marginRight: 30
    },
});
