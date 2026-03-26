import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FiltroCategoria } from "./filtroCategoria"
import {ListaProdutos} from "./listaProdutos"
import { router } from "expo-router";

export default function HomeEcommerce() {
    const categorias =[
        {id:1, nome: "Lar", imagemIcon: "https://cdn-icons-png.flaticon.com/512/3750/3750386.png"},
        {id:2, nome: "Moda", imagemIcon: "https://cdn-icons-png.flaticon.com/512/3205/3205439.png"},
        {id:3, nome: "Beleza", imagemIcon: "https://cdn-icons-png.flaticon.com/512/2553/2553680.png"},
        {id:4, nome: "Celular", imagemIcon: "https://m.media-amazon.com/images/I/51k0qRQFcuL._AC_SX522_.jpg"},
        {id:5, nome: "Veículos", imagemIcon: "https://capposeguros.com.br/wp-content/uploads/2014/01/Pack_veiculos_sombra.png"},
        {id:6, nome: "Eletrônicos", imagemIcon: "https://eletronicailson.com.br/Uploads/Imagens/584/loja-de-eletronicos-no-grajau.jpg?16032026"},
    ]
    const produtos = [
        {id:1, nome: "Pc Gamer LOQ com 16gb de memoria ram", preco:123, imagemProduto:"https://m.media-amazon.com/images/I/61ZLNgls9fL._AC_SL1000_.jpg", descricao:"descricao001"},
        {id:2, nome: "Câmera Inteligente iM3 C Black Intelbras", preco:199.58, imagemProduto:"https://http2.mlstatic.com/D_Q_NP_615216-MLA99419117904_112025-F.webp", descricao:"descricaos002"},
        {id:3, nome: "Hub Zigbee Matter Thread Cabeado Tuya Nova Digital Homekit", preco:299.24, imagemProduto:"https://http2.mlstatic.com/D_Q_NP_757938-MLB83158191680_032025-F-hub-zigbee-matter-thread-cabeado-tuya-nova-digital-homekit.webp", descricao:"descricao003"},
        {id:4, nome: "Micro-ondas Electrolux 20L Branco com Função Tira Odor e Descongelar MTO30", preco:469, imagemProduto:"https://http2.mlstatic.com/D_NQ_NP_2X_787358-MLA100187065347_122025-F.webp", descricao:"descricao004"},
        {id:5, nome: "Liquidificador Turbo Power Mondial 550W L-99 WG", preco:89.90, imagemProduto:"https://http2.mlstatic.com/D_NQ_NP_2X_975041-MLA99992396177_112025-F.webp", descricao:"descricao005"},
        {id:6, nome: "Cafeteira Elétrica 15 Xícaras Elgin Coffee Break Preta", preco:74.95, imagemProduto:"https://http2.mlstatic.com/D_NQ_NP_2X_836181-MLA99499696704_112025-F.webp", descricao:"descricao006"},
    ]

  return (
    
    <SafeAreaView style={style.safeAreaView}>
        <ScrollView>
            <View style={style.containerCategoria}>
                <View style={style.categoria}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems: 'center', paddingHorizontal:10}}>
                        {
                            categorias.map((cat, index)=>(
                                <View key={index}>
                                    <FiltroCategoria 
                                        nome = {cat.nome}
                                        imagemIcon = {cat.imagemIcon} 
                                    />
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
            <View  style={style.containerProdutos}>
                <View  style={style.produtos} >
                    {
                        produtos.map((prod, index)=>(
                            <ListaProdutos
                                key={index}
                                imagemProduto={prod.imagemProduto}
                                nome = {prod.nome}
                                preco = {prod.preco}
                                onPress={()=>
                                    router.push({
                                        pathname: "/cardProdutoDetalhado",
                                        params: {
                                            produto: JSON.stringify(prod)
                                        }
                                    })
                                }
                            />
                            
                        ))
                    }  
                </View>
            </View>
       </ScrollView>
    </SafeAreaView>
   
  );

}

const style = StyleSheet.create({
    containerCategoria:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:10
    },
    categoria:{
        flex:1
    },
    containerProdutos:{
        marginBottom:20
    },
    produtos:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center', 
    },
  
    safeAreaView:{
        flex:1,
        backgroundColor:'#F5F5F5',
    }
    
})