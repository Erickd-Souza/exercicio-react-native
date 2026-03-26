import { TouchableOpacity,Text, Image, StyleSheet,View } from "react-native";

type Props ={
    imagemProduto: string,
    nome: string,
    preco: number,
    onPress: () => void
}
export function ListaProdutos({imagemProduto,nome, preco, onPress}: Props){
    return(
        <View style={style.cardProduto}>
            <TouchableOpacity onPress={onPress}>
                <View style={style.conteudoImagem}>
                    <Image style={style.imagemProduto} source={{uri: imagemProduto,}}/>
                </View>    
                <View style={style.cardInfo}>
                    <Text style={style.texto} numberOfLines={2} ellipsizeMode="tail">{nome}</Text>
                    <Text style={style.textoPreco}>R${preco.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    cardProduto:{
        width:'48%',
        borderColor:'#f0f0f0',
        borderRadius:10,
        borderWidth:1,
        padding:10,
        backgroundColor:'white',
        
        elevation:3, // Android
        shadowColor:'#000', // iOS
        shadowOpacity:0.1,
        shadowRadius:4,
        shadowOffset:{width:0, height:2}
    },
     imagemProduto: {
        height: 140,
        width: '100%',
        marginBottom: 5, 
        resizeMode:'contain'
    },
    texto:{
        fontWeight:400,
        fontSize:18,
    },
    textoPreco:{
        fontWeight:500,
        fontSize:20,
        color:'#2E7D32'
    },
    cardInfo:{
       padding:10,
       gap:5

    },
    conteudoImagem:{
        alignItems:'center'
    }


})