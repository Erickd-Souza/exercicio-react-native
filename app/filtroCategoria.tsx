import {StyleSheet, ScrollView,View, Image,Text, TouchableOpacity } from "react-native";

type Props ={
    nome:string,
    imagemIcon:string
}

export function FiltroCategoria({nome,imagemIcon}: Props) {
    return(
        <TouchableOpacity>
            <View style={style.card} >
                <Image style={style.imagemIcon} source={{uri: imagemIcon,}}/>
                <Text style={style.texto}>{nome}</Text>
            </View>
        </TouchableOpacity>
       
    );
}

const style = StyleSheet.create({
    imagemIcon: {
        height:30,
        width:30,
        marginBottom: 5,
        resizeMode: 'contain'
    },

    card:{
        width:90,
        height: 90,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        margin:10
    },

    texto: {
        fontSize: 13,
        textAlign: "center",
        fontWeight:400
    }
})