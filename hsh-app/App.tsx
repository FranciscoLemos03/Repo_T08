import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={require('../hsh-app/assets/logo.png')} />
          <Image style={styles.user} source={require('../hsh-app/assets/SayMyName.png')} />
        </View>
      </View>

      <View style={styles.homeContainer}>        
        <Image style={styles.home} source={require('../hsh-app/assets/House.png')} />
      </View>

      
      <Image style={styles.maps} source={require('../hsh-app/assets/Maps.png')} />

      <View style={styles.filterContainerTop}>
        <Text style={{...styles.title, marginRight: 30, marginLeft: 5}}>Categoria:</Text>
        <Text style={styles.title}>Preço:</Text>
      </View>

      <View style={styles.answerContainerTop}>
        <TextInput style={{marginRight: 15, marginLeft: 5, backgroundColor: '#D3D3D3', borderRadius: 5, fontSize: 15, textAlign: 'center', width: 70}} placeholder="Inserir Aqui...">T3</TextInput>
        <TextInput style={{marginRight: 15, marginLeft: 5, backgroundColor: '#D3D3D3', borderRadius: 5, fontSize: 15, textAlign: 'center', width: 70}} placeholder="Inserir Aqui...">600</TextInput>
      </View>

      <View style={styles.answerContainer}>
          <Text style={{...styles.title}}>Título:</Text>
          <TextInput style={{marginTop: 15, backgroundColor: '#D3D3D3', borderRadius: 5, fontSize: 15, width: '95%', height: 50}} placeholder="Inserir Aqui..."></TextInput>
      </View>
      <View style={styles.answerContainer}>
          <Text style={{...styles.title}}>Descrição:</Text>
          <TextInput style={{marginTop: 15, backgroundColor: '#D3D3D3', borderRadius: 5, fontSize: 15, width: '95%', height: 100, top: 0}} placeholder="Inserir Aqui..."></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logo: {
    width: 59,
    height: 44
  },

  user: {
    width: 50,
    height: 50,
    borderRadius: 30
  },

  imageContainer: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center'
  },

  banner:{
    top: 0,
    left: 0,
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

  homeContainer:{
    width: '100%',
    height: 266,
    overflow: 'hidden',
    color: '#fff',
    marginTop: 75
  },

  home:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  maps: {
    position: 'absolute',
    marginRight: 5,
    marginTop: 340,
    width: 200,
    height: 200,
    right: 0,
    borderRadius: 30
  },

  title:{
    fontsize: 14,
    color: '#7000ff',
    fontWeight: 'bold'
  },

  filterContainerTop:{
    flexDirection: 'row',
    marginTop: 20,
  },

  answerContainerTop:{
    flexDirection: 'row',
    marginTop: 20,
  },

  answerContainer:{
    marginLeft: 5,
    marginTop: 30
  }

});
