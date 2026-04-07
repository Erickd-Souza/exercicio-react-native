import { useLocalSearchParams } from "expo-router";
import { View,Image, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function  CardDetalhadoProduto() {
    const {produto} = useLocalSearchParams();
    const dados = produto ? JSON.parse(produto as string) : null;

    return(
        <SafeAreaView style={style.container}>
            <ScrollView >
                <View style={{justifyContent:'space-evenly',maxWidth:800, }}>
                    <View>
                        <Image style={style.imagemProduto} source={{uri: dados.imagemProduto,}}/>
                    </View>
                    <View style={{padding:10}}>
                        <Text  style={style.titulo}>{dados.nome}</Text>
                    </View>
                    <View style={{padding:5}}>
                        <Text style={style.textoPreco}>R${dados.preco.toFixed(2)}</Text>
                    </View>
                    <View style={style.descricao}>
                        <Text style={style.tituloDescricao}>Descrição</Text>
                        <Text style={style.subtitulo}>{dados.descricao}</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.botao}>
                    <Text  style={style.tituloButton}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        gap:2,
    },
    imagemProduto:{
        height:350,
        resizeMode:'contain',
        margin:20
    },
    titulo:{
        fontSize:22,
        fontWeight:600    
    },
    tituloDescricao:{
        fontSize:20,
        fontWeight:500    
    },
    subtitulo:{
        fontSize:18,
        fontWeight:200,
        color:'#6c6767',
        textAlign:'justify',
        lineHeight:24  
    },
    botao:{
        height:45,
        width:320,
        backgroundColor:"#086fff",
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    tituloButton:{
        fontSize:20,
        fontWeight:600,
        color:'white'    
    },
    buttonContainer:{
        position:'absolute',
        bottom:20,
        left:0,
        right:0,
        alignItems:'center',
    },
    descricao:{
        padding:10,
        marginBottom:80,
    },
     textoPreco:{
        fontWeight:500,
        fontSize:25,
        color:'#2E7D32'
    },

})