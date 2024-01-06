import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

export default function SendStudentRequest() {
  const [cardNumber, setCardNumber] = useState('**** **** **** ****'); // Initial card number

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={require('../hsh-app/assets/logo.png')} />
          <Image style={styles.user} source={require('../hsh-app/assets/SayMyName.png')} />
        </View>
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.statusText}>Pedido de Status Estudante Mário</Text>

        <View style={styles.imageBox}>
          <Image style={styles.smallImage} source={require('../hsh-app/assets/enviar.png')} />
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Numero do Cartão:</Text>
            <TextInput
              style={styles.inputBox}
              value={cardNumber}
              onChangeText={(text) => setCardNumber(text)}
            />
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Válido Até:</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="YYYY"
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableText}>Nome:</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Nome Completo"
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.purpleButton}>
          <Text style={styles.purplebuttonText}>Enviar para Aprovação</Text>
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

  // Big Box with Smaller Image
  imageBox: {
    backgroundColor: 'lightgray', // Set background color as needed
    padding: 20,
    width: '80%',
    height: '40%',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallImage: {
    width: '50%', // Set the width as needed
    height: '50%', // Set the height as needed
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

   // Input box
   inputBox: {
    borderWidth: 1,
    borderColor: '#9e51fd',
    borderRadius: 8,
    padding: 8,
    width: '50%', // Set the width as needed
  },

  // Buttons
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    width: '65%',
  },
  
  purpleButton: {
    backgroundColor: 'white',
    borderColor: '#9e51fd',
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%', // Adjust as needed
  },
  
  purplebuttonText: {
    color: '#9e51fd',
    fontWeight: 'bold',
    fontSize: 16,
  },


});
