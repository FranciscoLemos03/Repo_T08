import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function VerifyList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={require('../hsh-app/assets/logo.png')} />
          <Image style={styles.user} source={require('../hsh-app/assets/SayMyName.png')} />
        </View>
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.statusText}>Pedidos de status</Text>

        <View style={styles.rectangleContainer}>
          {/* Rectangle Box 1 */}
          <View style={styles.rectangleBox}>
            <Text style={styles.rectangleText}>Pedido de Status Estudante do Mário</Text>
            {/* Small Image on the right */}
            <Image style={styles.smallImage} source={require('../hsh-app/assets/eye.png')} />
          </View>

          {/* Rectangle Box 2 */}
          <View style={styles.rectangleBox}>
            <Text style={styles.rectangleText}>Pedido de Status Estudante da Inês</Text>
            {/* Small Image on the right */}
            <Image style={styles.smallImage} source={require('../hsh-app/assets/eye.png')} />
          </View>

          {/* Rectangle Box 3 */}
          <View style={styles.rectangleBox}>
            <Text style={styles.rectangleText}>Pedido de Status Estudante do Pedro</Text>
            {/* Small Image on the right */}
            <Image style={styles.smallImage} source={require('../hsh-app/assets/eye.png')} />
          </View>
        </View>
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
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  
  
statusText: {
  fontSize: 25,
  fontWeight: 'bold',
  marginBottom: 100, // Increase the marginBottom for more space
  alignSelf: 'flex-start',
  color: '#9e51fd', // Set the text color to purple
},
  
  rectangleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', // Occupy the full width of the screen
  },
  
  rectangleBox: {
    width: '90%',  // Adjust the width as needed
    maxWidth: 800,  // Add maxWidth to limit the width
    height: 100,
    backgroundColor: '#e7c9ee',
    borderRadius: 8,
    padding: 16,  // Increase padding for better appearance
    marginBottom: 16,
    alignItems: 'center',
    flexDirection: 'row', // Align text and image horizontally
    justifyContent: 'space-between', // Add space between text and image
    borderWidth: 2,         // Add borderWidth for the border
    borderColor: '#9e51fd', // Set borderColor to purple
  },

  rectangleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  smallImage: {
    width: 45,
    height: 45,
    borderRadius: 15,
  },
});
