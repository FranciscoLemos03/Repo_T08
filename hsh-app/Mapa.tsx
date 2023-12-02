import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={require('../hsh-app/assets/logo.png')} />
          <Image style={styles.user} source={require('../hsh-app/assets/SayMyName.png')} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.topLeftContainer}>
          <Image style={styles.squareImage} source={require('../hsh-app/assets/Filter.png')} />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            placeholderTextColor="#888"
          />
        </View>
      </View>

      <View style={styles.bottomImageContainer}>
        <Image style={styles.bottomImage} source={require('../hsh-app/assets/Mapa.png')} />
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

  contentContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },

  topLeftContainer: {
    width: 45,
    height: 45,
    paddingTop: 15,
  },

  squareImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  searchBar: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#7000FF',
    borderRadius: 20,
    paddingLeft: 10,
    color: 'black',
  },

  searchContainer: {
    width: '50%',
    marginLeft: 'auto',
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

  bottomImageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end', // Align to the bottom
  },

  bottomImage: {
    width: '100%',
    height: '75%', // Adjust the height to occupy 75% of the screen
    resizeMode: 'cover',
  },
});