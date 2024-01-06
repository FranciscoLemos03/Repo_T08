import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function StudentRequest() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={require('../StudentRequest/assets/logo.png')} />
          <Image style={styles.user} source={require('../StudentRequest/assets/SayMyName.png')} />
        </View>
      </View>

      {/* New content */}
      <View style={styles.mainContainer}>
        <Text style={styles.statusText}>Pedido de Status Estudante Mário</Text>
        <Image style={styles.bigImage} source={require('../StudentRequest/assets/IPCACARD.png')} />

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Numero do Cartão:</Text>
            <Text style={styles.tableText}>**** **** **** 8473</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Válido Até:</Text>
            <Text style={styles.tableText}>2024</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Nome:</Text>
            <Text style={styles.tableText}>Mário Branco Gustavo</Text>
          </View>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.purpleButton}>
          <Text style={styles.purplebuttonText}>Aprovado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.redButton}>
          <Text style={styles.redbuttonText}>Negado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  header: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    zIndex: 1,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  imageContainer: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
 
  logo: {
    width: 59,
    height: 44,
  },

  user: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },

  mainContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
    padding: 5,
  },

  statusText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 0,
    alignSelf: 'flex-start',
    color: '#9e51fd',
  },

  bigImage: {
    width: '90%',
    height: '60%',
    resizeMode: 'contain',
  },

  tableContainer: {
    marginTop: 25,
    width: '95%',
  },

  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  tableText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9e51fd',
  },

  // Buttons
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
    width: '90%',
  },
  
  purpleButton: {
    backgroundColor: 'white',
    borderColor: '#9e51fd',
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%', // Adjust as needed
  },
  
  redButton: {
    backgroundColor: 'white',
    borderColor: 'red',
    marginLeft: 5,
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%', // Adjust as needed
  },
  
  purplebuttonText: {
    color: '#9e51fd',
    fontWeight: 'bold',
    fontSize: 16,
  },

  redbuttonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
