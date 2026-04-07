import { router } from "expo-router";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
         <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3395/3395817.png',
        }}
      />
      </View>
      <View style={styles.containerTexto}>
        <Text style={styles.titulo}>Bem-vindo</Text>
        <Text style={styles.subtitulo}>Seja bem vindo ao aplicativo de e-commerce Erione onde poderá comprar de forma rápida e segura.</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.botao} onPress={() => router.push('/home-ecommerce')}>
          <Text style={styles.textobotao}>COMEÇAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent:'space-around'
  },
  logo:{
    height:100,
    width:100,
    
  },
  containerTexto:{
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20,
    gap:10
  },
  botao:{
    height:45,
    width:320,
    backgroundColor:"#086DFF",
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  textobotao:{
    color:'white',
    fontWeight:500
  },
  subtitulo:{
    color: "#666",
     fontSize:16,
     textAlign:'center'
  },
  titulo:{
    fontWeight:600,
    fontSize:30
  }
})