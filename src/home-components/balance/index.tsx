import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MotiView } from 'moti'

interface Props{
    saldo: string
}

export default function Balance({ saldo }: Props){
    return(
        <MotiView 
        style={styles.container}
        from={{
            rotateX: '-100deg',
            opacity: 0
        }}
        animate={{
            rotateX: '0deg',
            opacity: 1
        }}
        transition={{
            type: 'timing',
            delay: 300,
            duration: 900
        }}
        >
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo Disponível</Text>
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.balance}>{saldo}</Text>
                    </View>
            </View>
        </MotiView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -50,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 8,
        paddingBottom: 20,
        paddingTop: 22,
        borderWidth: 1,
        borderColor: '#ccc',
        zIndex: 99,
    }, 

    item: {
        
    },

    itemTitle: {
        fontSize: 20,
        color: '#DADADA',
        marginBottom: 6
    },

    currencySymbol: {
        color: '#dadada',
        fontSize: 20,
        marginRight: 5
    },

    balance: {
        fontSize: 20,
        color: '#2ecc71',
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

// e74c3c --> cor para os gastos 