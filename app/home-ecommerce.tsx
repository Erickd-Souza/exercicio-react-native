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
  {
    id:1,
    nome: "Pc Gamer LOQ com 16gb de memoria ram",
    preco:123,
    imagemProduto:"https://m.media-amazon.com/images/I/61ZLNgls9fL._AC_SL1000_.jpg",
    descricao:`💻 Notebook Gamer Lenovo LOQ – Alto Desempenho, Velocidade e Potência

🔥 Ideal para jogos, estudos e trabalho pesado!

O Lenovo LOQ entrega desempenho de sobra para quem precisa de velocidade e eficiência. Equipado com hardware moderno, ele roda jogos atuais, programas pesados e multitarefas sem travamentos.

✅ Principais benefícios:

✔️ Processador potente – alto desempenho para qualquer tarefa
✔️ Placa de vídeo dedicada – ideal para jogos e edição
✔️ Tela Full HD – imagens nítidas e cores vibrantes
✔️ SSD ultrarrápido – inicialização em segundos
✔️ Memória RAM de alta performance – mais fluidez no uso
✔️ Sistema de refrigeração eficiente

🎮 Perfeito para:
• Jogos
• Programação
• Edição de vídeo
• Uso profissional

📦 Conteúdo:
1x Notebook + carregador

🚀 Envio rápido e seguro!`
  },

  {
    id:2,
    nome: "Câmera Inteligente iM3 C Black Intelbras",
    preco:199.58,
    imagemProduto:"https://http2.mlstatic.com/D_Q_NP_615216-MLA99419117904_112025-F.webp",
    descricao:`📹 Câmera Wi-Fi Intelbras IMC 3 Full HD 1080p

👉 Segurança e praticidade na palma da sua mão!

✔️ Imagem Full HD
✔️ Visão noturna
✔️ Áudio bidirecional
✔️ Detecção de movimento
✔️ Acesso remoto via app
✔️ Conexão Wi-Fi

🏠 Ideal para casas e comércios

📦 Conteúdo:
1x Câmera + fonte + manual

🚀 Envio rápido!`
  },

  {
    id:3,
    nome: "Hub Zigbee Matter Thread Cabeado Tuya Nova Digital Homekit",
    preco:299.24,
    imagemProduto:"https://http2.mlstatic.com/D_Q_NP_757938-MLB83158191680_032025-F-hub-zigbee-matter-thread-cabeado-tuya-nova-digital-homekit.webp",
    descricao:`🏠 Hub Zigbee Matter Thread Tuya – Automação Inteligente

👉 Transforme sua casa em uma casa inteligente!

O hub Tuya permite conectar e controlar diversos dispositivos inteligentes em um só lugar com estabilidade e rapidez.

✅ Principais benefícios:

✔️ Compatível com Zigbee, Matter e Thread
✔️ Integração com Alexa, Google e Apple HomeKit
✔️ Conexão estável e rápida
✔️ Controle via aplicativo
✔️ Automação de rotinas inteligentes

📱 Controle luzes, sensores, tomadas e muito mais!

📦 Conteúdo:
1x Hub inteligente
1x Cabo de alimentação
Manual

⚠️ Necessário internet para funcionamento

🚀 Envio rápido e seguro!`
  },

  {
    id:4,
    nome: "Micro-ondas Electrolux 20L Branco com Função Tira Odor e Descongelar MTO30",
    preco:469,
    imagemProduto:"https://http2.mlstatic.com/D_NQ_NP_2X_787358-MLA100187065347_122025-F.webp",
    descricao:`🍽️ Micro-ondas Electrolux 20L MTO30 – Praticidade no seu dia a dia

👉 Aqueça e prepare alimentos com rapidez!

✅ Principais benefícios:

✔️ Capacidade de 20 litros
✔️ Função Tira Odor
✔️ Função Descongelar
✔️ Painel fácil de usar
✔️ Design moderno

🔥 Ideal para:
• Aquecer refeições
• Descongelar alimentos
• Uso diário

📦 Conteúdo:
1x Micro-ondas
Manual

⚠️ Voltagem: verificar antes da compra

🚀 Envio rápido!`
  },

  {
    id:5,
    nome: "Liquidificador Turbo Power Mondial 550W L-99 WG",
    preco:89.90,
    imagemProduto:"https://http2.mlstatic.com/D_NQ_NP_2X_975041-MLA99992396177_112025-F.webp",
    descricao:`🥤 Liquidificador Mondial Turbo Power 550W

👉 Potência e praticidade na sua cozinha!

✅ Principais benefícios:

✔️ Potência de 550W
✔️ Lâminas resistentes
✔️ Copo de grande capacidade
✔️ Fácil de limpar
✔️ Ideal para sucos, vitaminas e receitas

🍓 Perfeito para:
• Sucos
• Vitaminas
• Molhos

📦 Conteúdo:
1x Liquidificador

🚀 Envio rápido e seguro!`
  },

  {
    id:6,
    nome: "Cafeteira Elétrica 15 Xícaras Elgin Coffee Break Preta",
    preco:74.95,
    imagemProduto:"https://http2.mlstatic.com/D_NQ_NP_2X_836181-MLA99499696704_112025-F.webp",
    descricao:`☕ Cafeteira Elétrica Elgin 15 Xícaras

👉 Café quentinho todos os dias!

✅ Principais benefícios:

✔️ Prepara até 15 xícaras
✔️ Sistema corta-pingos
✔️ Jarra resistente
✔️ Fácil de usar e limpar

🔥 Ideal para:
• Casa
• Escritório

📦 Conteúdo:
1x Cafeteira
1x Jarra

🚀 Envio rápido!`
  }
];

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