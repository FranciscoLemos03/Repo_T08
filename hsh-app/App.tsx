import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.imageContainer}>
            <Image style={styles.logo} source={require('../hsh-app/assets/logo.png')} />
            <Image style={styles.user} source={require('../hsh-app/assets/SayMyName.png')} />
          </View>
        </View>

        <View style={styles.containerbtn}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Pedido do Joaquim</Text>
            <Image style={styles.eye} source={require('../hsh-app/assets/eye.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbtn}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Pedido do Alberto</Text>
            <Image style={styles.eye} source={require('../hsh-app/assets/eye.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbtn}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Pedido do Joao</Text>
            <Image style={styles.eye} source={require('../hsh-app/assets/eye.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbtn}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Pedido do Eduardo</Text>
            <Image style={styles.eye} source={require('../hsh-app/assets/eye.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbtn}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Pedido da Maria</Text>
            <Image style={styles.eye} source={require('../hsh-app/assets/eye.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbtn}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Pedido da Monica</Text>
            <Image style={styles.eye} source={require('../hsh-app/assets/eye.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbtn}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Pedido do Roberto</Text>
            <Image style={styles.eye} source={require('../hsh-app/assets/eye.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbtn}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Pedido da Joana</Text>
            <Image style={styles.eye} source={require('../hsh-app/assets/eye.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerbtn}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Pedido da Bruna</Text>
            <Image style={styles.eye} source={require('../hsh-app/assets/eye.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  },
  textoPedido: {
    color: '#7000ff',
    fontWeight: 'bold',
    position: 'absolute',
    right: 0,
  },
  containerbtntop:{
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerbtn:{
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#7000ff',
    fontWeight: 'bold',
    position: 'absolute',
    left: 0,
    marginLeft: 15
  },
  botao: {
    width: "90%",
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7000ff',
    borderWidth: 3,
    borderRadius: 10,
  },
  eye: {
    width: 29,
    height: 24,
    position: 'absolute',
    right: 0,
    marginRight: 15
  },

});
