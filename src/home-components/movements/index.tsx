import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ListItem } from '@/pages/Home';
import { MotiView, MotiText, AnimatePresence } from 'moti'

interface Data {
    data: ListItem;
  }

export default function Movements({ data }: Data) {

    const [showValue, setShowValue] = useState(false)

 return (
   <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue)}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>

        <Text style={styles.label}>
            {data.label}
        </Text>

        { showValue ? (
            <AnimatePresence exitBeforeEnter>
                <MotiText 
                style={styles.value}
                from={{
                   translateX: 100 
                }}
                animate={{
                    translateX: 0
                }}
                transition={{
                    type: 'spring',
                    duration: 1000
                }}
                >
                    {data.type === 0 ? `R$ -${data.value}` : `R$ ${data.value}`}
                </MotiText>
            </AnimatePresence>
        ) : (
            <AnimatePresence exitBeforeEnter>
                <MotiView 
                style={styles.skeleton}
                from={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    type: 'timing'
                }}
                ></MotiView>
            </AnimatePresence>
        ) }

      </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 25,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada',
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },

    label: {
        fontWeight: 'bold',
        fontSize: 16
    },

    value: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    date: {
        color: "#DADADA",
        fontWeight: 'bold'
    },

    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8
    }
})