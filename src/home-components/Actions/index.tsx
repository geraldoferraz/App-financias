import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={27} color={'#000'}/>
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="tagso" size={27} color={'#000'}/>
            </View>
            <Text style={styles.labelButton}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="creditcard" size={27} color={'#000'}/>
            </View>
            <Text style={styles.labelButton}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="barcode" size={27} color={'#000'}/>
            </View>
            <Text style={styles.labelButton}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="setting" size={27} color={'#000'}/>
            </View>
            <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="clockcircleo" size={27} color={'#000'}/>
            </View>
            <Text style={styles.labelButton}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="linechart" size={27} color={'#000'}/>
            </View>
            <Text style={styles.labelButton}>Investir</Text>
        </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
        overflow: 'hidden',
        marginVertical: 30
    },

    actionButton: {
        alignItems: 'center',
        marginRight: 20,
    },

    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },

    labelButton: {
        marginTop: 6,
        textAlign: 'center',
        fontWeight: 'bold',
        overflow: 'visible'
    }
})