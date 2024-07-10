import React, { useState } from "react";
import { MotiView } from 'moti'
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Platform, RefreshControl } from 'react-native';
import { useForm, Controller, SubmitHandler, FormState } from 'react-hook-form'
import RNPickerSelect from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


interface Data{
    label: string
    value: number
    type: number
    description: string 
}

const schema = yup.object({
    label: yup.string().required("Informe um título para sua transação"),
    value: yup.number().min(0.01, "O valor deve ser maior que zero.").required("Informe o valor da transferência"),
    type: yup.number().default(1),
    description: yup.string().default("")
})

export default function Transaction(){

    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        // Aqui você pode adicionar a lógica para atualizar a lista de itens se necessário
        }, 1500);
    };

    const { control, handleSubmit, formState: { errors } } = useForm<Data>({
        resolver: yupResolver(schema)
    });

    const handleSignIn: SubmitHandler<Data> = (data) => {
        console.log(data)
    };

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={64}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ScrollView 
                style={styles.fullSize} 
                contentContainerStyle={styles.scrollContainer}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>
                }
                
                >
                    <View style={styles.container}>
                        <MotiView
                            from={{ translateX: 420 }}
                            animate={{ translateX: 0 }}
                            transition={{ type: 'timing', duration: 800, delay: 300 }}
                        >
                            <Text style={styles.text}>Área de Transferência</Text>
                        </MotiView>
                        <MotiView 
                            style={styles.content}
                            from={{ translateX: -420 }}
                            animate={{ translateX: 0 }}
                            transition={{ type: 'timing', duration: 800, delay: 300 }}
                        >
                            {/* Label input */}
                            <View style={styles.iconAndInputContainer}>
                                <View style={styles.iconContainer}>
                                    <FontAwesome6 name="pencil" size={20} color="black" />
                                </View>
                                <Controller 
                                    control={control}
                                    name="label"
                                    render={({ field: { onChange, onBlur, value }, fieldState: { error, isTouched } }) => (
                                        <TextInput 
                                            style={[
                                                styles.input,
                                                (error && isTouched) && styles.errorInput
                                            ]}
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            placeholder="Dê um título a sua transferência"
                                            placeholderTextColor="#ccc"
                                        />
                                    )}
                                />
                            </View>
                            {/* Value input */}
                            <View style={styles.iconAndInputContainer}>
                                <View style={styles.iconContainer}>
                                    <Entypo name="credit" size={21} color="black" />
                                </View>
                                <Controller 
                                    control={control}
                                    name="value"
                                    render={({ field: { onChange, onBlur, value }, fieldState: { error, isTouched } }) => (
                                        <TextInput 
                                            style={[
                                                styles.input,
                                                (error || (value === 0 && isTouched)) && styles.errorInput
                                            ]}
                                            keyboardType="numeric"
                                            onChangeText={(text) => onChange(parseFloat(text))}
                                            onBlur={onBlur}
                                            value={value ? value.toString() : ''}
                                            placeholder="Digite o valor da transferência"
                                            placeholderTextColor="#ccc"
                                        />
                                    )}
                                />
                            </View>
                            {/* Type picker */}
                            <View style={styles.iconAndInputContainer}>
                                <View style={styles.iconContainer}>
                                    <Entypo name="credit" size={21} color="black" />
                                </View>
                                <View style={styles.pickerContainer}>
                                    <Controller
                                        control={control}
                                        name="type"
                                        render={({ field: { onChange, onBlur, value }, fieldState: { error, isTouched } }) => (
                                            <RNPickerSelect
                                                onValueChange={(itemValue) => {
                                                    onChange(itemValue);
                                                    onBlur();
                                                }}
                                                value={value}
                                                items={[
                                                    { label: 'Entrada', value: 1 },
                                                    { label: 'Saída', value: 0 }
                                                ]}
                                                placeholder={{
                                                    label: 'Selecione o tipo de transação:',
                                                    value: null,
                                                }}
                                                style={pickerSelectStyles}
                                            />
                                        )}
                                    />
                                </View>
                            </View>
                            {/* Description input */}
                            <View style={styles.iconAndInputContainer}>
                                <View style={styles.iconContainer}>
                                    <Entypo name="text" size={21} color="black" />
                                </View>
                                <Controller 
                                    control={control}
                                    name="description"
                                    render={({ field: { onChange, onBlur, value }, fieldState: { error, isTouched } }) => (
                                        <TextInput 
                                            style={styles.input}
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            placeholder="Digite uma descrição para sua transação"
                                            placeholderTextColor="#ccc"
                                        />
                                    )}
                                />    
                            </View>
                            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
                                <Feather name="plus-circle" size={24} color="#FFFFFF" />
                                <Text style={styles.buttonText}>Adicionar Transação</Text>
                            </TouchableOpacity>
                        </MotiView>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    fullSize: {
        flex: 1
    },
    scrollContainer: {
        flexGrow: 1
    },
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    content: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 35,
        marginRight: 10,
        marginTop: 16,
    },

    input: {
        width: '70%',  // Largura global para todos os inputs
        height: 40,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        marginTop: 25,
        fontSize: 16,
        color: '#121212',
        paddingLeft: 18
    },

    pickerContainer: {
        width: '70%', 
        height: 40, 
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 8, 
        marginBottom: 10,
        marginTop: 25,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        overflow: 'hidden',
    },

    errorPickerContainer: {
        borderColor: '#ff375b',  // Cor da borda para erros
        backgroundColor: '#ffe5e8' // Cor de fundo leve para erros
    },
    

    button: {
        backgroundColor: '#8000FF',
        padding: 20,
        paddingLeft: 23,
        paddingRight: 23,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        gap: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    iconContainer: {
        backgroundColor: '#f8e2fd',
        borderRadius: 10,
        padding: 10,
        paddingRight: 13,
        paddingLeft: 13,
        overflow: 'hidden',
        marginRight: 10,
        marginLeft: 20, 
        marginTop: 15
    },
    iconAndInputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },

    errorInput: {
        borderColor: '#ff375b',
        backgroundColor: '#ffe5e8'
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        color: '#121212',
        paddingRight: 30, 
        paddingLeft: 10, 
        paddingVertical: 10, 
    },
});


// e74c3c --> cor para os gastos 