import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UserInfo() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.aroundTextTitle}><Text style={styles.textTitle}>Dados do Usuário: </Text></View>
      <View style={styles.content}>
        <View style={styles.aroundTitle}>
          <Text style={styles.stylesTitle}>
            Nome :
          </Text>
          <Text style={styles.contentTextSmall}>
            Geraldo
          </Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.aroundTitle}>
          <Text style={styles.stylesTitle}>
            Sobrenome :  
          </Text>
          <Text style={styles.contentTextSobrenome}>
            Ferraz
          </Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.aroundTitle}>
          <Text style={styles.stylesTitle}>
            Idade :
          </Text>
          <Text style={styles.contentTextSmall}>
            20 anos
          </Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.aroundTitle}>
          <Text style={styles.stylesTitle}>
            CPF :
          </Text>
          <Text style={styles.contentTextCPF}>
            705.866.464-18
          </Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.aroundTitle}>
          <Text style={styles.stylesTitle}>
            Email :
          </Text>
          <Text style={styles.contextTextEmail}>
            geraldoferraz876@gmail.com
          </Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },

  aroundTextTitle: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  content: {
    backgroundColor: '#eee',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25,
    borderRadius: 30,
    padding: 15, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  aroundTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%',
  },

  stylesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 3
  },

  contentText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginRight: 135,
    marginTop: 3
  },

  contentTextSmall: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginRight: 165,
    marginTop: 3
  },

  contentTextCPF: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginRight: 112,
    marginTop: 3
  },

  contentTextSobrenome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginRight: 130,
    marginTop: 3
  },

  contextTextEmail: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 2,
    marginRight: 6
  },
});
